def userLoggedIn(request):
    try:
        request.session['uid']
        userLoggedIn = True
    except:
        userLoggedIn = False
    return {'userLoggedIn': userLoggedIn}