from flask import Flask, request, jsonify
import psycopg2
from flask_cors import CORS
import json 
app = Flask(__name__)
cors = CORS(app)

#app.config['CORS_ORIGINS'] = ['http://localhost:3000/']

@app.route('/login', methods=['GET', 'POST'])
def login():
    data = []
    if request.method == 'POST':
        content = request.get_json()
        try:            
                connection = psycopg2.connect(user = "postgres",password = "Surabhi@1999",port = "5432", database = "project")
                cursor = connection.cursor()
                query = "select * from newtable where emailid=%s;"
                cursor.execute(query, (content['emailid'],))
                connection.commit()
                record = cursor.fetchall()
                try:
                    return (jsonify(record[0][1]))
                except:
                    return (jsonify({"ache": [0], "cough": [0],"diarrhea": [0],"fatigue": [0],
    "headache": [0],
    "runny_nose": [0

    ],
    "shortness_of_breath": [0

    ],
    "sneezing": [0

    ],
    "soar_throat": [0

    ],
    "temperature": [

    ],
    "weight": [

    ]
}))
        except:
                return "Error while connecting to PostgreSQL"
        if(connection):
                   cursor.close()
                   connection.close()
                   print("PostgreSQL connection is closed")


@app.route('/save', methods=['POST'])
def hello():
    if (request.method == 'POST'):
        content = request.get_json()
        connection = psycopg2.connect(user = "postgres",password = "Surabhi@1999",host = "::1",port = "5432", database = "project")
        cursor= connection.cursor()
        query_1 ="delete from newtable where emailid=%s;"
        cursor.execute(query_1, (content['emailid'],))
        #cursor= connection.cursor()
        query="insert into newtable values(%s,%s);"
        cursor.execute(query,(content['emailid'],json.dumps(content['symptoms'])))
        connection.commit()
        connection.close()
        return jsonify({'Successful':1})
    return jsonify({'Failure':0})
    
