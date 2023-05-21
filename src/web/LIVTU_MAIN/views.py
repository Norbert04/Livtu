from django.shortcuts import render

from django.http import HttpResponse

def home(request):
    return render(request, "LIVTU_MAIN/home.html")

def about(request):
    return render(request, "LIVTU_MAIN/about.html")

def teach(request):
    return render(request, "LIVTU_MAIN/teach.html")

def study(request):
    return render(request, "LIVTU_MAIN/study.html")

def terms(request):
    return render(request, "LIVTU_MAIN/legal/terms.html")

def privacy(request):
    return render(request, "LIVTU_MAIN/legal/privacy.html")

def contact(request):
    return render(request, "LIVTU_MAIN/legal/contact.html")

def support(request):
    return render(request, "LIVTU_MAIN/support.html")

def jobs(request):
    return render(request, "LIVTU_MAIN/jobs.html")