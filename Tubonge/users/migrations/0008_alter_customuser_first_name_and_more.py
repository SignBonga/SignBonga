# Generated by Django 5.1.2 on 2024-10-20 16:18

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0007_alter_learnerprofile_user_alter_tutorprofile_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='first_name',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='last_name',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='learnerprofile',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='learner_profile', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='tutorprofile',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='tutor_profile', to=settings.AUTH_USER_MODEL),
        ),
    ]
