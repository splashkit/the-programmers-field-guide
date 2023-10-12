using static SplashKitSDK.SplashKit;

const int SCREEN_WIDTH = 800;
const int SCREEN_HEIGHT =  600;
const int PLAYER_RADIUS = 25;

OpenWindow("Flay Catch", SCREEN_WIDTH, SCREEN_HEIGHT);

double playerX = SCREEN_WIDTH / 2;
double playerY = SCREEN_HEIGHT / 2;

while ( ! QuitRequested() )
{
    ClearScreen(ColorWhite());

    FillCircle(ColorRed(), playerX, playerY, PLAYER_RADIUS);

    RefreshScreen();

    ProcessEvents();
}
