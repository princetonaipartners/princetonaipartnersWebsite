@echo off
echo =====================================
echo PRE-DEPLOYMENT TEST SUITE
echo =====================================
echo.
echo Running comprehensive tests...
echo This may take a few minutes.
echo.

npx playwright test tests/pre-deployment.spec.js --reporter=html

echo.
echo =====================================
echo Tests complete!
echo =====================================
echo.
echo Opening test report...
echo.

npx playwright show-report

pause
