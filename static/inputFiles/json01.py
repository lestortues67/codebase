
"""
Source : https://stackoverflow.com/questions/11914666/python-using-sqlalchemy-store-a-list-into-sql-database
Date : 22/11/2022
Auteur : Christian Doriath
Dossier : 
Fichier : json01.py
Description : 

Mot cles : 
"""





class Json(TypeDecorator):

    impl = String

    def process_bind_param(self, value, dialect):
        return json.dumps(value)

    def process_result_value(self, value, dialect):
        return json.loads(value)