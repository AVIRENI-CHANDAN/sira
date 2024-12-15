# sira

My own JIRA

## Development server

```bash
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

## Production server

- uvicorn (recommended)

  > ```bash
  >   uvicorn main:app --host 0.0.0.0 --port 8000 --workers 4
  > ```

- Gunicorn

  > ```bash
  > gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:8000
  > ```
