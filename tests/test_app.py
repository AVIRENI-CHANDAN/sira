def test_read_root(client):
    response = client.get("/")
    print("Response", response.__dict__)
    assert response.status_code == 200
    assert response.json() == {"message": "Welcome to FastAPI!"}
