import os


class Config:
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class ConfigPostgreSQL(Config):
    SQLALCHEMY_DATABASE_URI = f"postgresql+psycopg2://{os.getenv('DB_USERNAME')}:{os.getenv('DB_PASSWORD')}@{os.getenv('DB_HOST')}/{os.getenv('DB_NAME')}"


class ConfigMySQL(Config):
    SQLALCHEMY_DATABASE_URI = f"mysql+pymysql://{os.getenv('DB_USERNAME')}:{os.getenv('DB_PASSWORD')}@{os.getenv('DB_HOST')}/{os.getenv('DB_NAME')}"


class ConfigSQLite(Config):
    SQLALCHEMY_DATABASE_URI = f"sqlite:///{os.getenv('DB_PATH')}"
