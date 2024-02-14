

#<mccd_code>
app = Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] = 'hard to guess string'
app.config['SQLALCHEMY_DATABASE_URI'] ='mysql+mysqlconnector://root:root@localhost/regex'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_RECORD_QUERIES'] = True
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

bootstrap = Bootstrap(app)
db = SQLAlchemy(app)

#</mccd_code>

"""
 <mccd_categorie>app</mccd_categorie>
"""
