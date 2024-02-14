from random import *
import string

import logging
import datetime
import time
import os

import locale
locale.setlocale(locale.LC_TIME, "fr_FR")

  
arr = [{'nom':'NONTAILLE1', 'fichier':'NONTAILLE1.txt' ,'extension':'.txt', 'path':'D:',       'taille':22554},      
        {'nom':'TUTU', 'fichier':'TUTU.mc' ,'extension':'.mc', 'path':'D:\temp\TUTU.mc', 'taille':124554},
        {'nom':'okTaille1', 'fichier':'okTaille1.py' ,'extension':'.py', 'path':'D:\temp\okTaille1.py', 'taille':2554},
        {'nom':'TUTU', 'fichier':'TUTU.bmp' ,'extension':'.bmp', 'path':'D:\temp\TUTU.bmp', 'taille':124554},
        {'nom':'okTaille2', 'fichier':'okTaille2.c' ,'extension':'.c', 'path':'D:\temp\okTaille2.c', 'taille':2554},
        {'nom':'NONTAILLE2', 'fichier':'NONTAILLE2.txt' ,'extension':'.txt', 'path':'D:\temp_NONTAILLE2.txt', 'taille':12554},
       {'nom':'noEXT1', 'fichier':'noEXT1.vvv' ,'extension':'.vvv', 'path':'D:\temp_noEXT1.vvv', 'taille':12554},
        {'nom':'okTaille1', 'fichier':'okTaille1.py' ,'extension':'.py', 'path':'D:\temp\okTaille1.py', 'taille':2554},
        {'nom':'OWWO', 'fichier':'OWWO.bmp' ,'extension':'.bmp', 'path':'D:\temp\OWWO.bmp', 'taille':124554},
        {'nom':'ZAZA', 'fichier':'ZAZA.bmp' ,'extension':'.bmp', 'path':'D:\temp\ZAZA.bmp', 'taille':124554},
        {'nom':'okTaille3', 'fichier':'okTaille3.c' ,'extension':'.c', 'path':'D:\temp\okTaille3.c', 'taille':2554},
        {'nom':'OWWO', 'fichier':'OWWO.mc' ,'extension':'.mc', 'path':'D:\temp\OWWO.mc', 'taille':124554},
        {'nom':'okTaille4', 'fichier':'okTaille4.mc' ,'extension':'.mc', 'path':'D:\temp\okTaille4.mc', 'taille':154} ]




class Dossier(object):
    def __init__(self, p_path):
        """
        Les paramètres : PPPPPPPPPPPPPPPPPPPPPPPPPPPPP
        'p_path' est du genre "path/to/the/filename"
        exemple 'p_path' : D:\\Python39\\MesDEv\\Flask\\Flask_codebase2023\\'

        # Les preffixes (ajoutés aux méthodes) utilisés : FFFFFFFFFFFFFFFFFFFFF
        Ils sont 1 : 
        errorIfNot_ : une autre méthode a retourné False. Si l'on souhaite en avoir la raison 
        on appelle cette méthode. 

        # Les suffixes (ajoutés aux méthodes) utilisés : SSSSSSSSSSSSSSSSSSSSS
        Ils sont 3 : 
        _tf : la méthode retourne True ou False
        _dict : la méthode retourne ce dict {'succes':True, 'msg':'fichier valide', 'data':""}
        _data : la méthode retourne une data 

        Cette classe prend en entrée un PATH.  


        """
        self.path = p_path
        self.extensionCode = ['.c','.h','.js','.py','.html','.htm','.txt']
        self.extensionNonCode = ['.bmp','.jpg','.jpeg','.jpg','.png','.svg','.ico']
        self.extensionMc = [".mc"]
        self.tailleMaxiFichierCode = 5000

    def getWorkDir_data(self):
        return os.getcwd()

    def change_dir(self, p_dir):
        # Si le dir courant n'est PAS celui fourni avec 'p_dir'
        # alors on change de dossier pour 'p_dir'
        wd = os.getcwd()
        if wd == p_dir:
            print("Nous sommes dans le bon dossier :) ")
        else:
            print("Je dois changer de dossier ...")
            os.chdir(p_dir)
            print("Nous sommes maintenant dans le bon dossier : ",p_dir,"\n")

    def check_dir_tf(p_dir):
        # Vérifier si le dossier fourni avec 'p_dir' est le dossier courant.
        dirCourant = os.getcwd()
        if dirCourant == p_dir:
            return True
        return False



    def dictInList_tf(self, p_key, p_value, p_list):
        for d in p_list:
            if d[p_key]==p_value:
                return True
        return False

    # retourne l'index d'un DICT dans une liste
    def returnIndex(self, p_list, p_key, p_value):
        for index, d  in enumerate(p_list):
            if (d[p_key]==p_value):
                print("d[p_key] : ", d[p_key], " p_value : ",p_value)
                return index
        return ("NO Index")   


    
    def pathIsValid_tf(self, p_path):
        # analyse si le dossier existe
        try:
            t = os.stat(p_path)
            print("os.stat(p_path) : ",os.stat(p_path))
            print("dir is VALID")
            return True
        except FileNotFoundError:
            print("FileNotFoundError \n")
            return False
        except OSError:
            print("OSError \n")
            return False

    def errorIfNot_pathIsValid_tf(self, p_path):
        # Cette méthode est appelé si la méthode 'pathIsValid_tf' a retourné False
        try:
            t = os.stat(p_path)
            print("os.stat(p_path) : ",os.stat(p_path))
            print("dir is VALID")
            d = {'succes':True, 'msg':'OK path', 'data':""}
            return d
        except FileNotFoundError:
            print("FileNotFoundError \n")
            d = {'succes':False, 'msg':'path error : FileNotFoundError', 'data':""}
            return d
        except OSError:
            print("OSError \n")
            print("OSError \n")
            d = {'succes':False, 'msg':'path error : OSError', 'data':""}
            return d

    def returnListOfFiles_data(self, p_dir):    
        # un path est fourni et on retourne TOUS ses fichiers dans une liste
        listOfFiles = []
        scanIterator = os.scandir(path=p_dir)
        with scanIterator as item:
            for entry in item:
                if not entry.name.startswith('.') and entry.is_file():

                  nom = entry.name
                  data =  os.path.splitext(entry.name)
                  fichier = data[0]
                  extension = data[1]
                  path = entry.path
                  stat = entry.stat
                  taille = entry.stat()[6]

                  d = {'nom':nom, 'fichier':fichier ,'extension':extension, 'path':path, 'taille':taille}
                  listOfFiles.append(d)
              
        print("Ce dossier contient ",str(len(listOfFiles))," fichiers.")
        return listOfFiles

    def filterFiles_data(self, p_listOfFiles):
        """
        Cette méthode prend en entrée une liste de plusieurs dict à ce format : 
        {'nom':'NONTAILLE1', 'fichier':'NONTAILLE1.txt' ,'extension':'.txt', 'path':'D:',       'taille':22554}

        
        Puis elle retourne deux listes : 
        # 1) liste des fichiers 'VALIDE'
        # 2) liste des fichiers 'INVALIDE'
        
        """

        # boucle sur les dict dans 'p_listOfFiles' :
        # 1ere étape : 
        
        # Le fichier est un fichier de code (son extension figure parmi la liste 'self.extensionCode')
        # Si sa taille < self.tailleMaxiFichierCode alors il entre dans la liste 'fichierValide'
        # Si sa taille > self.tailleMaxiFichierCode alors il entre dans la liste 'fichierInvalide'

        # Le fichier est un fichier de NON code (son extension figure parmi la liste 'self.extensionNonCode')
        # il entre dans la liste 'fichierNonCode'.

        # Le fichier est un fichier de mot clé (son extension figure parmi la liste 'self.extensionMc') 
        # qui est le fichier d'information obligatoire pour CHAQUE fichier NON code 
        # il entre dans la liste 'fichierMc'.

        # Au final cette méthode aura trié la liste des dict pour les placer dans 4 fichiers : 
        # 1) 'fichierValide' pour les fichiers de CODE taille<5000
        # 2) 'fichierInvalide' pour les fichiers de CODE taille>5000 et les entensions NON listées
        # 3) 'fichierMc' pour les fichiers *.mc
        # 4) 'fichierNonCode' pour les fichiers 'IMAGE'

        # Les extensions qui n'appartiennent : 
        # NI à la liste 'self.extensionCode' 
        # NI à la liste 'self.extensionNonCode' 
        # NI à la liste 'self.extensionMc' 
        # entrent dans la liste 'fichierInvalide'

        fichierMc = []
        fichierNonCode = []
        fichierValide = []
        fichierInvalide = []

        for d in p_listOfFiles:
            if d['extension'] in self.extensionCode:
                #print(" in self.extensionCode : ",d['extension'])
                if d['taille'] < self.tailleMaxiFichierCode:
                    fichierValide.append(d)
                else:
                    #print("Invalide en taille ? : ",d['taille'])
                    fichierInvalide.append(d)
            elif d['extension'] in self.extensionMc:
                fichierMc.append(d)
            elif d['extension'] in self.extensionNonCode:
                fichierNonCode.append(d)
            else:
                fichierInvalide.append(d)

        """
        2em étape
        # La règle pour les fichiers IMAGE (qui ne peuvent contenir de data car 
        # il est trop complexe de l'intégrer dans le fichier image) dit ceci : 
        # Un 2em fichier d'informations portant le même NOM mais 
        avec une extension *.mc est OBLIGATOIRE. 

        Le code qui suit va traquer les 2 incohérences qui sont : 
        - un fichier IMAGE sans fichier *.mc
        - un fichier *.mc sans fichier IMAGE

        On parcourt 'fichierNonCode' en supprimant son dict dans 'fichierMc'.
        A la fin les dict restant dans 'fichierMc' sont orphelin de fichier IMAGE
        et son envoyer vers 'fichierInvalide'.

        """
        
        for index, d  in enumerate(fichierNonCode):
            if (self.dictInList_tf('nom', d['nom'], fichierMc)):
                # rechercher l'index du DICT dans 'fichierMc'
                i = self.returnIndex(fichierMc, 'nom', d['nom'])

                # ajouter les DICT dans VALIDE
                fichierValide.append(d)
                fichierValide.append(fichierMc[i])

                # supprimeer les dict des 2 fichiers
                fichierMc.pop(i)

            else:
                fichierInvalide.append(d)
        if len(fichierMc)>0:
            #print("Il reste du monde dans MC !!")
            for d in fichierMc:
                fichierInvalide.append(d)
        return{'valide':fichierValide,'invalide':fichierInvalide}


d = Dossier("p_path")

dd = d.filterFiles_data(arr)

print("Les fichiers VALIDE :")
for d in dd['valide']:
  print("Nom : ", d['fichier'])
print("\n")

print("Les fichiers NON VALIDE :")
for d in dd['invalide']:
  print("Nom : ", d['fichier'])






