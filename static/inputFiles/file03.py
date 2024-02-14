



#<mccd_code>

class selectTag (db.Model):
    __tablename__ = 'selectTag'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    selectValue = db.Column(db.Text)
    selectOption = db.Column(db.Text)

    def __init__(self, p_selectValue, p_selectOption):
    # Ici on crée une instance de la classe 'htmlCode'
    # 1 seul p_ est passé : le champ 'codeText' 
    # le champ 'id' est généré automatiquement par MySQL
        self.selectValue = p_selectValue
        self.selectOption = p_selectOption

    def create():
    # Ici on ajoute à la table  1 seul enregistrement en créant une instance de classe
    # La valeur de 'item' est un string aléatoire de 10 symboles. 
        Myadd = selectTag(randstr(10),randstr(10))
        db.session.add(Myadd) 
        db.session.commit()
    def RetrieveId(p_id):
        # ici on recherche un enregistrement par son champ 'id': 
        return (selectTag.query.filter_by(id=p_id).first())

#</mccd_code>

"""
 <mccd_categorie>classe mysql</mccd_categorie>
"""








