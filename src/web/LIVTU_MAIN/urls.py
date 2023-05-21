from django.urls import path
from LIVTU_MAIN import views

urlpatterns = [
    path("", views.home, name="home"),
    path("", views.home, name="home"),
    path("teach/", views.teach, name="teach"),
    path("study/", views.study, name="study"),
    path("legal/terms", views.terms, name="terms_and_conditions"),
    path("legal/privacy", views.privacy, name="privacy"),
    path("legal/contact", views.contact, name="contact"),
    path("about/", views.about, name="about"),
    path("support/", views.support, name="support"),
    path("jobs/", views.jobs, name="jobs"),
]
