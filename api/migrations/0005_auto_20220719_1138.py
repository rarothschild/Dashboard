# Generated by Django 3.2.5 on 2022-07-19 18:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_remove_userprofile_houses'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='house',
            name='owner',
        ),
        migrations.RemoveField(
            model_name='house',
            name='renters',
        ),
        migrations.DeleteModel(
            name='Ledger',
        ),
        migrations.RemoveField(
            model_name='utility',
            name='user',
        ),
        migrations.DeleteModel(
            name='House',
        ),
        migrations.DeleteModel(
            name='Utility',
        ),
    ]
