from turtle import delay
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.alert import Alert
from webdriver_manager.chrome import ChromeDriverManager
import unittest
import pymssql

class TextprocTestCase(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        pass

    @classmethod
    def tearDownClass(cls):
        pass

    def setUp(self):
        pass

    def tearDown(self):
        pass

    # def test_homepage_data(self):
    #     driver = webdriver.Chrome(ChromeDriverManager().install())
    #     driver.get('http://ec2-54-183-139-130.us-west-1.compute.amazonaws.com/')
    #     delay = 3
    #     test = WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.CLASS_NAME, 'card-name')))
    #     card_names = driver.find_elements(By.CLASS_NAME, "card-name")
    #     count = 0
    #     for i in card_names:
    #         count += 1
    #     self.assertEqual(count, 15)
    
    # def test_homepage_img(self):
    #     driver = webdriver.Chrome(ChromeDriverManager().install())
    #     driver.get('http://ec2-54-183-139-130.us-west-1.compute.amazonaws.com/')
    #     delay = 3
    #     test = WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.CLASS_NAME, 'card-name')))
    #     homepage_image =  driver.find_element(By.CLASS_NAME, "homepage-pic")
    #     self.assertEqual(homepage_image.get_attribute('src'), 'http://ec2-54-183-139-130.us-west-1.compute.amazonaws.com/images/farm.jpg')

    # def test_homepage_links(self):
    #     driver = webdriver.Chrome(ChromeDriverManager().install())
    #     driver.get('http://ec2-54-183-139-130.us-west-1.compute.amazonaws.com/')
    #     delay = 3
    #     test = WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.CLASS_NAME, 'card-name')))
    #     aboutus = driver.find_element(By.XPATH, '//*[@id="root"]/div[3]/div[2]/div[2]/a[1]')
    #     self.assertEqual(aboutus.get_attribute('href'), 'http://ec2-54-183-139-130.us-west-1.compute.amazonaws.com/aboutus')
    #     myaccount = driver.find_element(By.XPATH, '//*[@id="root"]/div[3]/div[2]/div[2]/a[2]')
    #     self.assertEqual(myaccount.get_attribute('href'), 'http://ec2-54-183-139-130.us-west-1.compute.amazonaws.com/myaccount')

    # def test_search(self):
    #     driver = webdriver.Chrome(ChromeDriverManager().install())
    #     driver.get('http://ec2-54-183-139-130.us-west-1.compute.amazonaws.com/')
    #     delay = 3
    #     test = WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.CLASS_NAME, 'card-name')))
    #     driver.find_element(By.ID, 'search').send_keys('meat')
    #     driver.find_element(By.CLASS_NAME, 'search_button').click()
    #     count = 0
    #     test = WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.CLASS_NAME, 'data_img')))
    #     elements = driver.find_elements(By.CLASS_NAME, 'data_img')
    #     for i in elements:
    #         count +=1
    #     self.assertEqual(count, 5)

    # def test_subscribe(self):
    #     driver = webdriver.Chrome(ChromeDriverManager().install())
    #     driver.get('http://ec2-54-183-139-130.us-west-1.compute.amazonaws.com/aboutus')
    #     delay = 3
    #     test = WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div[2]/div[1]/div[2]')))
    #     sub = driver.find_element(By.CLASS_NAME, 'email_input').send_keys('test@gmail.com')
    #     driver.find_element(By.CLASS_NAME, 'sub_button').click()
    #     conn = pymssql.connect('ec2-54-183-139-130.us-west-1.compute.amazonaws.com', 'farmerize_sa', 'pass1234', 'master')
    #     cursor = conn.cursor(as_dict=True)
    #     cursor.execute('SELECT * FROM farmerize.dbo.subscriptions WHERE email=%s', 'test@gmail.com')
    #     item = cursor.fetchone()['Email']
    #     cursor.execute('DELETE FROM farmerize.dbo.subscriptions WHERE email=%s', 'test@gmail.com')
    #     conn.commit()
    #     conn.close()
    #     self.assertEqual(item, 'test@gmail.com')

    # def test_aboutus_links(self):
    #     driver = webdriver.Chrome(ChromeDriverManager().install())
    #     driver.get('http://ec2-54-183-139-130.us-west-1.compute.amazonaws.com/aboutus')
    #     delay = 3
    #     test = WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div[2]/div[1]/div[2]')))
    #     aboutus = driver.find_element(By.XPATH, '//*[@id="root"]/div[3]/div[2]/div[2]/a[1]')
    #     self.assertEqual(aboutus.get_attribute('href'), 'http://ec2-54-183-139-130.us-west-1.compute.amazonaws.com/aboutus')
    #     myaccount = driver.find_element(By.XPATH, '//*[@id="root"]/div[3]/div[2]/div[2]/a[2]')
    #     self.assertEqual(myaccount.get_attribute('href'), 'http://ec2-54-183-139-130.us-west-1.compute.amazonaws.com/myaccount')

    # def test_aboutus_img(self):
    #     driver = webdriver.Chrome(ChromeDriverManager().install())
    #     driver.get('http://ec2-54-183-139-130.us-west-1.compute.amazonaws.com/aboutus')
    #     delay = 3
    #     test = WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div[2]/div[1]/div[2]')))
    #     image1 = driver.find_element(By.XPATH, '//*[@id="root"]/div[2]/div[1]/div[2]')
    #     self.assertEqual(image1.get_attribute('style'), 'background-image: url("/static/media/top_img.276d0fec076b8b16c9d9.png");')
    #     image2 = driver.find_element(By.XPATH, '//*[@id="root"]/div[2]/div[2]/div[2]')
    #     self.assertEqual(image2.get_attribute('style'), 'background-image: url("/static/media/mid_img.3d020d982e658a0bf2bd.png");')
    
    #does not work
    # def test_results_links(self):
    #     driver = webdriver.Chrome(ChromeDriverManager().install())
    #     driver.get('http://ec2-54-183-139-130.us-west-1.compute.amazonaws.com/')
    #     delay = 3
    #     test = WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.CLASS_NAME, 'card-name')))
    #     driver.find_element(By.ID, 'search').send_keys('meat')
    #     driver.find_element(By.CLASS_NAME, 'search_button').click()
    #     count = 0
    #     test = WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.CLASS_NAME, 'data_img')))
    #     aboutus = driver.find_element(By.XPATH, '//*[@id="root"]/div[3]/div[2]/div[2]/a[1]')
    #     self.assertEqual(aboutus.get_attribute('href'), 'http://ec2-54-183-139-130.us-west-1.compute.amazonaws.com/aboutus')
    #     myaccount = driver.find_element(By.XPATH, '//*[@id="root"]/div[3]/div[2]/div[2]/a[2]')
    #     self.assertEqual(myaccount.get_attribute('href'), 'http://ec2-54-183-139-130.us-west-1.compute.amazonaws.com/myaccount')

    #doesnt work
    def test_product_links(self):
        driver = webdriver.Chrome(ChromeDriverManager().install())
        driver.get('http://ec2-54-183-139-130.us-west-1.compute.amazonaws.com/')
        delay = 3
        test = WebDriverWait(driver, delay).until(EC.element_to_be_clickable((By.XPATH, '//*[@id="root"]/div[2]/div[2]/div/div/div[1]/div[1]/div/div[6]/div[2]/a/button')))
        driver.find_element(By.XPATH, '//*[@id="root"]/div[2]/div[2]/div/div/div[1]/div[1]/div/div[6]/div[2]/a').click()
        aboutus = driver.find_element(By.XPATH, '//*[@id="root"]/div[3]/div[2]/div[2]/a[1]')
        self.assertEqual(aboutus.get_attribute('href'), 'http://ec2-54-183-139-130.us-west-1.compute.amazonaws.com/aboutus')
        myaccount = driver.find_element(By.XPATH, '//*[@id="root"]/div[3]/div[2]/div[2]/a[2]')
        self.assertEqual(myaccount.get_attribute('href'), 'http://ec2-54-183-139-130.us-west-1.compute.amazonaws.com/myaccount')

    # def test_user_create(self):
    #     driver = webdriver.Chrome(ChromeDriverManager().install())
    #     driver.get('http://ec2-54-183-139-130.us-west-1.compute.amazonaws.com/myaccount')
    #     delay = 3
    #     test = WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.CLASS_NAME, 'accountbutton')))
    #     driver.find_element(By.XPATH, '//*[@id="firstName"]').send_keys('Test')
    #     driver.find_element(By.XPATH, '//*[@id="lastName"]').send_keys('Test')
    #     driver.find_element(By.XPATH, '//*[@id="phone"]').send_keys('1231231234')
    #     driver.find_element(By.XPATH, '//*[@id="email"]').send_keys('test@gmail.com')
    #     driver.find_element(By.XPATH, '//*[@id="address"]').send_keys('123 test lane')
    #     driver.find_element(By.XPATH, '//*[@id="age"]').send_keys('22')
    #     driver.find_element(By.XPATH, '//*[@id="password"]').send_keys('test')
    #     button = driver.find_element(By.CLASS_NAME, 'accountbutton')
    #     button.submit()
    #     Alert(driver).accept()
    #     conn = pymssql.connect('ec2-54-183-139-130.us-west-1.compute.amazonaws.com', 'farmerize_sa', 'pass1234', 'master')
    #     cursor = conn.cursor(as_dict=True)
    #     cursor.execute('SELECT First, Last, Phone, Email, Address, Age, Password FROM farmerize.dbo.users WHERE email=%s', 'test@gmail.com')
    #     item = cursor.fetchone()
    #     cursor.execute('DELETE FROM farmerize.dbo.users WHERE email=%s', 'test@gmail.com')
    #     conn.commit()
    #     conn.close()
    #     self.assertEqual(item, {'First': 'Test', 'Last': 'Test', 'Phone': '1231231234', 'Email': 'test@gmail.com', 'Address': '123 test lane', 'Age': 22, 'Password': 'test'})

    # def test_myaccount_links(self):
    #     driver = webdriver.Chrome(ChromeDriverManager().install())
    #     driver.get('http://ec2-54-183-139-130.us-west-1.compute.amazonaws.com/myaccount')
    #     delay = 3
    #     test = WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.XPATH, '//*[@id="firstName"]')))
    #     aboutus = driver.find_element(By.XPATH, '//*[@id="root"]/div[3]/div[2]/div[2]/a[1]')
    #     self.assertEqual(aboutus.get_attribute('href'), 'http://ec2-54-183-139-130.us-west-1.compute.amazonaws.com/aboutus')
    #     myaccount = driver.find_element(By.XPATH, '//*[@id="root"]/div[3]/div[2]/div[2]/a[2]')
    #     self.assertEqual(myaccount.get_attribute('href'), 'http://ec2-54-183-139-130.us-west-1.compute.amazonaws.com/myaccount')    


# Main: Run Test Cases
if __name__ == '__main__':
    unittest.main()
