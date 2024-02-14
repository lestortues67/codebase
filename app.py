"""
Date : 14/02/2024 à 13h35 public repo change
Auteur : Christian Doriath
Dossier : /Python39/MesDEv/Flask/Flask_codebase2023
Fichier : app.py
Description : app "codebase" une base de données qui contient TOUTE notre base des connaissances
de code informatique. 
"""
import datetime
import string
from flask import Flask, request, render_template, session, redirect, url_for, flash, jsonify
from flask_bootstrap import Bootstrap
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired
from flask_sqlalchemy import SQLAlchemy
from random import choice
import locale
locale.setlocale(locale.LC_TIME, "fr_FR")

import time
from logging import FileHandler, WARNING
import uuid

import pytz

from git import Repo

from packages.mysql import * 
# from packages.forms import * 

# Le code important est dans 'Main' : 
# m = Main(app.config['UPLOAD_FOLDER'])
# m.run() 

print("username_mysql : ",username_mysql ,"\n")
print("password_mysql : ",password_mysql ,"\n")
print("hostname_mysql : ",hostname_mysql ,"\n")
print("databasename_mysql : ",databasename_mysql ,"\n")

app = Flask(__name__)

# set a 'SECRET_KEY' to enable the Flask session cookies
app.config['SECRET_KEY'] = 'replace with a SUPERsecretKEY '
# source : https://blog.pythonanywhere.com/121
SQLALCHEMY_DATABASE_URI = "mysql+mysqlconnector://{username}:{password}@{hostname}/{databasename}".format(
    username=username_mysql,
    password=password_mysql,
    hostname=hostname_mysql,
    databasename=databasename_mysql,
)

app.debug = True
# app.config['SECRET_KEY'] = 'hard to guess string'
# app.config['SQLALCHEMY_DATABASE_URI'] ='mysql+mysqlconnector://root:root@localhost/codebase'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_RECORD_QUERIES'] = True
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

bootstrap = Bootstrap(app)
db = SQLAlchemy(app)



def dateProvider():
    # Fournir immédiatement l'heure et la date de Paris. 

    # Définir le fuseau horaire local
    fuseau_horaire_local = pytz.timezone('Europe/Paris')

    # Obtenir l'heure locale dans le fuseau horaire défini
    heure_locale = datetime.datetime.now(fuseau_horaire_local)

    dateLongueTexte = heure_locale.strftime("%A, %d %B %Y %H:%M:%S")

    epoch = int(heure_locale.timestamp())
    
    return{'date':heure_locale,'texte':dateLongueTexte,'epoch':epoch}


def randomString(p_length):
    s = ""
    #créer un string de p_length lettres
    for x in range(p_length):
      s = s + choice(string.ascii_letters)
    return s



class Langage (db.Model):
    __tablename__ = 'langage'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    createDate = db.Column(db.DateTime)
    createDateLongue = db.Column(db.Text)
    createEpoch = db.Column(db.Integer)

    retrieveDate = db.Column(db.DateTime)
    retrieveDateLongue = db.Column(db.Text)
    retrieveEpoch = db.Column(db.Integer)

    updateDate = db.Column(db.DateTime)
    updateDateLongue = db.Column(db.Text)
    updateEpoch = db.Column(db.Integer)

    deleteDate = db.Column(db.DateTime)
    deleteDateLongue = db.Column(db.Text)
    deleteEpoch = db.Column(db.Integer)



    langage = db.Column(db.Text)
    supprime = db.Column(db.Integer)
    dossiers = db.relationship("Dossier", backref="langage")
    uuid = db.Column(db.Text)
    def __init__(self, p_langage):
        # Ici on crée une instance de la classe 'Langage'
        # le champ 'id' est généré automatiquement par MySQL

        d = dateProvider()#return{'date':heure_locale,'texte':dateLongueTexte,'epoch':epoch}

        self.langage=p_langage
        self.createDate = d['date']
        self.createDateLongue = d['texte']
        self.createEpoch = d['epoch']

        self.supprime = 0
        self.uuid = str(uuid.uuid4())

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
        
    def create(self, p_langage):
        Myadd = Langage(p_langage)
        db.session.add(Myadd)
        db.session.commit()

class Dossier (db.Model):
    __tablename__ = 'dossier'
    # Cette table est un enfant de la classe 'Langage'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    createDate = db.Column(db.DateTime)
    createDateLongue = db.Column(db.Text)
    createEpoch = db.Column(db.Integer)

    retrieveDate = db.Column(db.DateTime)
    retrieveDateLongue = db.Column(db.Text)
    retrieveEpoch = db.Column(db.Integer)

    updateDate = db.Column(db.DateTime)
    updateDateLongue = db.Column(db.Text)
    updateEpoch = db.Column(db.Integer)

    deleteDate = db.Column(db.DateTime)
    deleteDateLongue = db.Column(db.Text)
    deleteEpoch = db.Column(db.Integer)

    parentId = db.Column(db.Integer, db.ForeignKey("langage.id"), nullable=False)
    dossier = db.Column(db.Text)
    supprime = db.Column(db.Integer)
    sousdossiers = db.relationship("Sousdossier", backref="langage")
    uuid = db.Column(db.Text)
    def __init__(self, p_parentId, p_dossier):
        # Ici on crée une instance de la classe 'Langage'
        # le champ 'id' est généré automatiquement par MySQL

        d = dateProvider()#return{'date':heure_locale,'texte':dateLongueTexte,'epoch':epoch}

        try:
            self.dossier=p_dossier
            self.parentId=p_parentId
            self.createDate = d['date']
            self.createDateLongue = d['texte']
            self.createEpoch = d['epoch']

            self.supprime = 0
            self.uuid = str(uuid.uuid4())
        except: 
            print("error __init__")
    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}


class Sousdossier (db.Model):
    __tablename__ = 'sousdossier'
    # Cette table est un enfant de la classe 'Dossier'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)

    createDate = db.Column(db.DateTime)
    createDateLongue = db.Column(db.Text)
    createEpoch = db.Column(db.Integer)

    retrieveDate = db.Column(db.DateTime)
    retrieveDateLongue = db.Column(db.Text)
    retrieveEpoch = db.Column(db.Integer)

    updateDate = db.Column(db.DateTime)
    updateDateLongue = db.Column(db.Text)
    updateEpoch = db.Column(db.Integer)

    deleteDate = db.Column(db.DateTime)
    deleteDateLongue = db.Column(db.Text)
    deleteEpoch = db.Column(db.Integer)

    parentId = db.Column(db.Integer, db.ForeignKey("dossier.id"), nullable=False)
    supprime = db.Column(db.Integer)
    sousdossier = db.Column(db.Text)
    uuid = db.Column(db.Text)
    def __init__(self, p_parentId, p_sousdossier):
        # Ici on crée une instance de la classe 'Sousdossier'
        # le champ 'id' est généré automatiquement par MySQL

        d = dateProvider()#return{'date':heure_locale,'texte':dateLongueTexte,'epoch':epoch}

        try:
            self.sousdossier=p_sousdossier
            self.parentId=p_parentId
            self.createDate = d['date']
            self.createDateLongue = d['texte']
            self.createEpoch = d['epoch']

            self.supprime = 0
            self.uuid = str(uuid.uuid4())
        except: 
            print("error __init__")
    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}



class Notrecode (db.Model):
    __tablename__ = 'notrecode'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    dateCreation = db.Column(db.DateTime)
    dateLongueTexteCreation = db.Column(db.Text)
    epochCreation = db.Column(db.Integer)
    titre = db.Column(db.Text)
    langage = db.Column(db.Text)
    dossier = db.Column(db.Text)
    sousdossier = db.Column(db.Text)
    fichier = db.Column(db.Text)
    supprime = db.Column(db.Integer)
    
    def __init__(self, p_titre, p_langage, p_dossier, p_sousdossier, p_fichier, p_supprime):
        # Ici on crée une instance de la classe 'Langage'
        # le champ 'id' est généré automatiquement par MySQL

        now = datetime.datetime.today()
        #now = datetime_from_utc_to_local(datetime.datetime.today())
        today_year = datetime.datetime.today().year
        today_month = datetime.datetime.today().month
        today_day = datetime.datetime.today().day

        today_hour = datetime.datetime.today().hour+2
        today_minute = datetime.datetime.today().minute
        today_second = datetime.datetime.today().second

        print("today : ",today_year," ",today_month," ",today_day," ",today_hour," ",today_minute," ",today_second,"\n")

        dateHeureCmde = datetime.datetime(today_year,today_month,today_day,today_hour,today_minute,today_second,0)
        dateEpoch = int(time.time())+7200
        # il convient de modifier la ligne suivante pour tenir compte du décalage horaire
        # entre la France et le serveur
        dateLongueTexte = time.strftime("%A, %d %B %Y %H:%M:%S")

        self.langage= p_langage
        self.titre = p_titre
        self.langage = p_langage
        self.dossier = p_dossier
        self.sousdossier = p_sousdossier
        self.fichier = p_fichier
    
        self.dateCreation=now
        self.dateLongueTexteCreation = dateLongueTexte
        self.epochCreation = dateEpoch
        self.supprime = 0
    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}


db.create_all()

@app.route('/', methods=['GET', 'POST'])
def myindex():
    return render_template('index.html') 





# Jinja sait envoyer une balise html ? 
@app.route('/txBaliseHtml01', methods=['GET', 'POST'])
def mytxBaliseHtml01():
    elements = "<span> je suis un test </span>"
    btnBlue = "<button type='button' class='btn btn-primary' id='btnBlue0' data-state='0' >bouton bleu</button>"
    btnRed = "<button type='button' class='btn btn-danger' id='btnRed0' data-state='0' >bouton rouge</button>"
    return render_template('txBaliseHtml01.html',elements=elements,btnBlue=btnBlue,btnRed=btnRed) 


# 29/03/2023

@app.route('/fetchPost', methods=['GET', 'POST'])
def myfetchPost():
    return render_template('fetchPost.html') 

#30/03/2023
@app.route('/summerNote01', methods=['GET', 'POST'])
def mysummerNote01():
    return render_template('summerNote01.html') 

#30/03/2023
@app.route('/summerNote02', methods=['GET', 'POST'])
def mysummerNote02():
    return render_template('summerNote02.html') 

#31/03/2023
@app.route('/coller01', methods=['GET', 'POST'])
def mycoller01():
    return render_template('coller01.html') 

#31/03/2023
@app.route('/coller02', methods=['GET', 'POST'])
def mycoller02():
    return render_template('coller02.html') 


# 15/04/2023
#essai d'une 1ere page d'interface
@app.route('/interface0', methods=['GET'])
def myinterface0():
    return render_template('interface0.html') 



# 27/04/2023
#essai d'une 1ere page avec tinymce 
@app.route('/tinymce01', methods=['GET'])
def mytinymce01():
    print(dateProvider())
    return render_template('tinymce01.html') 



# 27/04/2023
@app.route("/createLangage")
def mycreateLangage():
    s = randomString(10)
    l = Langage(s)

    print("dir(l) : ",dir(l))

    print("l.createEpoch : ",l.createEpoch) 

    db.session.add(l)
    db.session.commit()
    return (s+'<p> OK, a été ajouté</p>')

# 28/04/2023
@app.route("/getAllLangage")
def mygetAllLangage():
    # e = Langage.query.filter_by(id=p_id).all()
    e = Langage.query.all()
    print("les datas : ",e,"\n")
    datas = []
    for l in e:
        datas.append(l.as_dict())
        print("Dict : ",l.as_dict(),"\n")
    
    # return ('<p>Les datas sont visibles</p>')
    return render_template('getAllLangage.html', datas=datas) 




# 27/04/2023
# Modifier la date+heure d'ouverture d'un enregistrement de la table "langage"
@app.route('/langageDateRetrieve/<p_id>', methods=['GET'])
def mylangageDateRetrieve(p_id):
    # Rechercher l'enregistrement 
    e = Langage.query.filter_by(id=p_id).first()

    #Obtenir la date+heure 
    d = dateProvider() #     return{'date':heure_locale,'texte':dateLongueTexte,'epoch':epoch}

    # Remplacer les champs : 
    e.retrieveEpoch =  d['epoch']
    e.retrieveDate =  d['date']
    e.retrieveDateLongue =  d['texte']

    db.session.commit()

    return ('retrieve date modified') 

# 27/04/2023
# Modifier la date+heure de modification d'un enregistrement de la table "langage"
@app.route('/langageDateUpdate/<p_id>', methods=['GET'])
def mylangageDateUpdate(p_id):
    # Rechercher l'enregistrement 
    e = Langage.query.filter_by(id=p_id).first()

    #Obtenir la date+heure 
    d = dateProvider() #     return{'date':heure_locale,'texte':dateLongueTexte,'epoch':epoch}

    # Remplacer les champs : 
    e.updateEpoch =  d['epoch']
    e.updateDate =  d['date']
    e.updateDateLongue =  d['texte']

    db.session.commit()

    return ('update date modified') 

# 27/04/2023
# Modifier la date+heure de supression d'un enregistrement de la table "langage"
@app.route('/langageDateDelete/<p_id>', methods=['GET'])
def mylangageDateDelete(p_id):
    # Rechercher l'enregistrement 
    e = Langage.query.filter_by(id=p_id).first()

    #Obtenir la date+heure 
    d = dateProvider() #     return{'date':heure_locale,'texte':dateLongueTexte,'epoch':epoch}

    # Remplacer les champs : 
    e.deleteEpoch =  d['epoch']
    e.deleteDate =  d['date']
    e.deleteDateLongue =  d['texte']

    db.session.commit()

    return ('delete date modified') 


# 27/04/2023
@app.route("/createDossier/<p_parentId>")
def mycreateDossier(p_parentId):
    s = randomString(10)
    l = Dossier(p_parentId,s)

    db.session.add(l)
    db.session.commit()
    return (s+'<p> OK, a été ajouté</p>')


# 28/04/2023
@app.route("/getAllDossier")
def mygetAllDossier():
    # e = Langage.query.filter_by(id=p_id).all()
    e = Dossier.query.all()
    print("les datas : ",e,"\n")
    datas = []
    for l in e:
        datas.append(l.as_dict())
        print("Dict : ",l.as_dict(),"\n")
    
    # return ('<p>Les datas sont visibles</p>')
    return render_template('getAllDossier.html', datas=datas) 




# 27/04/2023
# Modifier la date+heure d'ouverture d'un enregistrement de la table "langage"
@app.route('/dossierDateRetrieve/<p_id>', methods=['GET'])
def mydossierDateRetrieve(p_id):
    # Rechercher l'enregistrement 
    e = Dossier.query.filter_by(id=p_id).first()

    #Obtenir la date+heure 
    d = dateProvider() #     return{'date':heure_locale,'texte':dateLongueTexte,'epoch':epoch}

    # Remplacer les champs : 
    e.retrieveEpoch =  d['epoch']
    e.retrieveDate =  d['date']
    e.retrieveDateLongue =  d['texte']

    db.session.commit()

    return ('retrieve date modified') 

# 27/04/2023
# Modifier la date+heure de modification d'un enregistrement de la table "langage"
@app.route('/dossierDateUpdate/<p_id>', methods=['GET'])
def mydossierDateUpdate(p_id):
    # Rechercher l'enregistrement 
    e = Dossier.query.filter_by(id=p_id).first()

    #Obtenir la date+heure 
    d = dateProvider() #     return{'date':heure_locale,'texte':dateLongueTexte,'epoch':epoch}

    # Remplacer les champs : 
    e.updateEpoch =  d['epoch']
    e.updateDate =  d['date']
    e.updateDateLongue =  d['texte']

    db.session.commit()

    return ('update date modified') 

# 27/04/2023
# Modifier la date+heure de supression d'un enregistrement de la table "langage"
@app.route('/dossierDateDelete/<p_id>', methods=['GET'])
def mydossierDateDelete(p_id):
    # Rechercher l'enregistrement 
    e = Dossier.query.filter_by(id=p_id).first()

    #Obtenir la date+heure 
    d = dateProvider() #     return{'date':heure_locale,'texte':dateLongueTexte,'epoch':epoch}

    # Remplacer les champs : 
    e.deleteEpoch =  d['epoch']
    e.deleteDate =  d['date']
    e.deleteDateLongue =  d['texte']

    db.session.commit()

    return ('delete date modified') 



# 27/04/2023
@app.route("/createSousDossier/<p_parentId>")
def mycreateSousdossier(p_parentId):
    s = randomString(10)
    l = Sousdossier(p_parentId,s)

    db.session.add(l)
    db.session.commit()
    return (s+'<p> OK, a été ajouté</p>')

# 28/04/2023
@app.route("/getAllSousdossier")
def mygetAllSousdossier():
    # e = Langage.query.filter_by(id=p_id).all()
    e = Sousdossier.query.all()
    print("les datas : ",e,"\n")
    datas = []
    for l in e:
        datas.append(l.as_dict())
        print("Dict : ",l.as_dict(),"\n")
    
    # return ('<p>Les datas sont visibles</p>')
    return render_template('getAllSousdossier.html', datas=datas) 


# 27/04/2023
# Modifier la date+heure d'ouverture d'un enregistrement de la table "langage"
@app.route('/sousdossierDateRetrieve/<p_id>', methods=['GET'])
def mysousdossierDateRetrieve(p_id):
    # Rechercher l'enregistrement 
    e = Sousdossier.query.filter_by(id=p_id).first()

    #Obtenir la date+heure 
    d = dateProvider() #     return{'date':heure_locale,'texte':dateLongueTexte,'epoch':epoch}

    # Remplacer les champs : 
    e.retrieveEpoch =  d['epoch']
    e.retrieveDate =  d['date']
    e.retrieveDateLongue =  d['texte']

    db.session.commit()

    return ('retrieve date modified') 

# 27/04/2023
# Modifier la date+heure de modification d'un enregistrement de la table "langage"
@app.route('/sousdossierDateUpdate/<p_id>', methods=['GET'])
def mysousdossierDateUpdate(p_id):
    # Rechercher l'enregistrement 
    e = Sousdossier.query.filter_by(id=p_id).first()

    #Obtenir la date+heure 
    d = dateProvider() #     return{'date':heure_locale,'texte':dateLongueTexte,'epoch':epoch}

    # Remplacer les champs : 
    e.updateEpoch =  d['epoch']
    e.updateDate =  d['date']
    e.updateDateLongue =  d['texte']

    db.session.commit()

    return ('update date modified') 

# 27/04/2023
# Modifier la date+heure de supression d'un enregistrement de la table "langage"
@app.route('/sousdossierDateDelete/<p_id>', methods=['GET'])
def mysousdossierDateDelete(p_id):
    # Rechercher l'enregistrement 
    e = Sousdossier.query.filter_by(id=p_id).first()

    #Obtenir la date+heure 
    d = dateProvider() #     return{'date':heure_locale,'texte':dateLongueTexte,'epoch':epoch}

    # Remplacer les champs : 
    e.deleteEpoch =  d['epoch']
    e.deleteDate =  d['date']
    e.deleteDateLongue =  d['texte']

    db.session.commit()

    return ('delete date modified') 




# 05/02/2024
# Sur github on utilise le repo "codebase" : 
# git@github.com:lestortues67/codebase.git
@app.route('/git_update', methods=['POST'])
def my_git_update():
    print("une requete POST arrive ici ...")
    # repo = git.Repo('./gittest')

    # Existing local git Repo with 'git.Repo(path_to_dir)'
    # repo = git.Repo('./')
    print("git.Repo('./codebase') : ",git.Repo('./codebase'))


    repo = git.Repo('./codebase')
    print("repo : ",repo)

    print('repo working DIR : ',repo.working_dir)


    origin = repo.remotes.origin # = <git.Remote "origin">
    # >>> type(origin) 
    # >>> <class 'git.remote.Remote'>  

    print("origin : ",origin)
    print("Je suis une nouvelle phrase N°3 à 12h19")
    print("PUSH depuis PC Local à 15h00 **********************************************")
    

    # repo.create_head('main',origin.refs.main).set_tracking_branch(origin.refs.main).checkout()
    repo.create_head('master',origin.refs.master).set_tracking_branch(origin.refs.master).checkout()
    
    origin.pull()
    print("'origin.pull()' a été fait ...")
    return '', 200




@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500




        
