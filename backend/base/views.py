from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import MyUser
from .serializers import MyUserProfileSerilizer

@api_view(['GET'])
def get_user_profile_data(request, pk):
    try:
        try:
            user = MyUser.objects.get(username=pk)
        except MyUser.DoesNotExist:
            return Response({'error': 'User not found'})
    
        serializer = MyUserProfileSerilizer(user, many= False)
        return Response(serializer.data)
    except:
        return Response({'error': 'Error getting user data'})
   
        