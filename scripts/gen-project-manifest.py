#!/usr/bin/env python3
"""Generate public/projects/manifest.json dari isi folder public/projects/.

Cara pakai:
1. Taruh foto kegiatan proyek di public/projects/<nama-proyek>/ (atau langsung
   di public/projects/ untuk grup "Dokumentasi").
2. Jalankan: python3 scripts/gen-project-manifest.py
3. Commit + push + deploy (seperti biasa).

Output: manifest.json { groups: [{ title, photos: [url, ...] }, ...] }
Foto diurutkan alfabetis — beri prefix angka kalau mau urutan khusus (01_...).
"""
import json
import os
import re

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "projects")
EXTS = {".jpg", ".jpeg", ".png", ".webp", ".gif"}


def humanize(name):
    name = name.replace("-", " ").replace("_", " ").strip()
    name = re.sub(r"^\d+\s*", "", name)  # buang prefix angka
    return name[:1].upper() + name[1:] if name else "Dokumentasi"


def collect():
    groups = []
    if not os.path.isdir(ROOT):
        return groups
    for entry in sorted(os.listdir(ROOT)):
        full = os.path.join(ROOT, entry)
        if os.path.isdir(full) and entry != "manifest.json":
            photos = sorted(
                "/projects/%s/%s" % (entry, f)
                for f in os.listdir(full)
                if os.path.splitext(f)[1].lower() in EXTS
            )
            if photos:
                groups.append({"title": humanize(entry), "photos": photos})
        elif os.path.isfile(full) and os.path.splitext(entry)[1].lower() in EXTS:
            groups.append({"title": "Dokumentasi", "photos": ["/projects/" + entry]})
    return groups


def main():
    groups = collect()
    out = os.path.join(ROOT, "manifest.json")
    with open(out, "w", encoding="utf-8") as f:
        json.dump({"groups": groups}, f, ensure_ascii=False, indent=2)
    total = sum(len(g["photos"]) for g in groups)
    print("manifest.json ditulis: %d grup, %d foto" % (len(groups), total))


if __name__ == "__main__":
    main()
