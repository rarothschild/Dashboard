# Generated by Django 3.2.5 on 2022-07-19 19:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('HouseTrack', '0002_auto_20220719_1151'),
    ]

    operations = [
        migrations.AddField(
            model_name='house',
            name='morgage',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='house',
            name='rent',
            field=models.IntegerField(null=True),
        ),
    ]
