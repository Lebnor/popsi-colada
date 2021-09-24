# Generated by Django 3.2.7 on 2021-09-24 07:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Market',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('img', models.CharField(max_length=200)),
                ('img_field', models.ImageField(upload_to='')),
                ('description', models.CharField(max_length=500)),
            ],
        ),
    ]