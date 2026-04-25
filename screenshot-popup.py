from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto('http://localhost:5173')
    page.wait_for_timeout(1000)

    # Click the Let's Talk button in the Navbar
    page.click("text=Let's Talk")

    # Wait for the animation to finish
    page.wait_for_timeout(1000)

    # Take screenshot of the popup
    page.screenshot(path='portfolio-popup-style.png')
    browser.close()
