# Generated by Django 5.1.2 on 2024-10-19 19:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_alter_customuser_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='user_type',
            field=models.CharField(blank=True, choices=[('learner', 'Learner'), ('tutor', 'Tutor')], max_length=10, null=True),
        ),
    ]