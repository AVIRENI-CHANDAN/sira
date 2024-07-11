from backend import create_app, settings

app = create_app()

if __name__ == "__main__":
    app.run(debug=settings.DEBUG, port=settings.PORT, host=settings.HOST)
