# BoardNest April Fools Demo

This project is a static website. To preview it, run a local HTTP server first.

## Quick start

```bash
./start_server.sh
```

Then open:

- Public site: `http://127.0.0.1:8000/`
- Hidden page: `http://127.0.0.1:8000/unreleased.html`

## Manual run

```bash
python3 -m http.server 8000
```

If port `8000` is busy:

```bash
python3 -m http.server 8080
```

and open `http://127.0.0.1:8080/`.
