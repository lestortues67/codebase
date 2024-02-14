
"""
Source : 
Date : 13/10/2022
Auteur : Christian Doriath
Dossier : /informatique/developpements/javascript/JS Regex regular expression
Fichier : app.py
Description : app de démonstration des regex stockées dans une table MySQL

Mot cles : 
"""






#<mccd_code_texte>
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
import time
import os
from logging import FileHandler, WARNING
#</mccd_code_texte> </mccd_code_texte> </mccd_code_texte>

"""
mcObligatoire = ["id","deleted","priorId","langage","categorie","souscategorie",
"commentaire","nom","code","creationDate","modificationDate","auteur"]





 <mccd_categorie>file01 categorie</mccd_categorie>
 <mccd_souscategorie>file01 souscat</mccd_souscategorie>
 <mccd_commentaire>file01 commentaire</mccd_commentaire>
 <mccd_code>file01 code</mccd_code>
 <mccd_langage>file01 langage python</mccd_langage>

"""

