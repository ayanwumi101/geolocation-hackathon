release: python manage.py makemigrations
release: python manage.py migrate


web: gunicorn --pythonpath geolocation-hackathon/backend backend.wsgi --log-file -