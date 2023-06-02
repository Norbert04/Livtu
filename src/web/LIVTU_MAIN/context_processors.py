import pyrebase

with open("LIVTU_MAIN/firebase.py", 'r') as file:
    exec(file.read())

firebase=pyrebase.initialize_app(config)
database=firebase.database()
storage = firebase.storage()
auth = firebase.auth()

def userLoggedIn(request):
    try:
        request.session['uid']
        userLoggedIn = True
    except:
        userLoggedIn = False
    return {'userLoggedIn': userLoggedIn}

def getProfilePictureUrl(request):
    user_id = request.session.get('uid')
    profilePictureUrl = storage.child(f"profile_pictures/{user_id}.png").get_url(None)
    return {'profilePictureUrl': profilePictureUrl}

def getProfileBackgroundUrl(request):
    user_id = request.session.get('uid')
    profileBackgroundUrl = storage.child(f"profile_background/{user_id}.png").get_url(None)
    return {'profileBackgroundUrl': profileBackgroundUrl}

"""def getUserEmail(request):
    user_id = request.session.get('uid')
    userEmail = auth.get_account_info(user_id)['users']['email']
    return {'userEmail': userEmail}"""