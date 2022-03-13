from rest_framework.routers import DefaultRouter

from .views import CategoryViewSet, GameViewSet

router = DefaultRouter()
router.register(
    prefix="games",
    basename="games",
    viewset=GameViewSet
)
router.register(
    prefix="categories",
    basename="categories",
    viewset=CategoryViewSet
)

urlpatterns = router.urls