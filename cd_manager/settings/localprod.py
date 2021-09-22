import os
from cd_manager.settings.base import *
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',

]
DEBUG = False

ALLOWED_HOSTS=['*']

SECRET_KEY = os.environ['SECRET_KEY']

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
