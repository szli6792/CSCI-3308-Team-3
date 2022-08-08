import unittest
import pymssql

#Tests of database in SQL Server.

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
    
    #Tests individual product data in products table.
    def test_products(self):
        conn = pymssql.connect('ec2-54-183-139-130.us-west-1.compute.amazonaws.com', 'farmerize_sa', 'pass1234', 'master')
        cursor = conn.cursor(as_dict=True)
        cursor.execute('SELECT * FROM farmerize.dbo.products')
        item = cursor.fetchall()
        conn.close()
        self.assertEqual(len(item), 15)
        self.assertEqual(item[0], {'ProductID': 1, 'FarmID': 1, 'Category': 'Fruit', 'Name': 'Apple', 'Img': 'apple.png', 'Price': 3.42, 'Description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh justo, aliquam vel scelerisque sed, ullamcorper ut neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra dolor.', 'About': 'Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit', 'Special': 0})
    
    #Tests individual farms data in farms table.
    def test_farms(self):
        conn = pymssql.connect('ec2-54-183-139-130.us-west-1.compute.amazonaws.com', 'farmerize_sa', 'pass1234', 'master')
        cursor = conn.cursor(as_dict=True)
        cursor.execute('SELECT * FROM farmerize.dbo.farms')
        item = cursor.fetchall()
        conn.close()
        self.assertEqual(item[0]['Name'], 'Oak Farms')
        self.assertEqual(item[1]['Name'], 'High Ridge')
        self.assertEqual(item[2]['Name'], 'Low Lands')
        self.assertEqual(item[3]['Name'], 'Green Field')
        self.assertEqual(item[4]['Name'], 'County Fresh')
    
    #Tests email data in susbcriptions table.
    def test_subscribe(self):
        conn = pymssql.connect('ec2-54-183-139-130.us-west-1.compute.amazonaws.com', 'farmerize_sa', 'pass1234', 'master')
        cursor = conn.cursor(as_dict=True)
        cursor.execute("INSERT INTO farmerize.dbo.subscriptions (email) VALUES ('test@gmail.com')")
        conn.commit()
        cursor.execute('SELECT * FROM farmerize.dbo.subscriptions WHERE email=%s', 'test@gmail.com')
        item = cursor.fetchone()
        cursor.execute('DELETE FROM farmerize.dbo.subscriptions WHERE email=%s', 'test@gmail.com')
        conn.commit()
        conn.close()
        self.assertEqual(item['Email'], 'test@gmail.com')
    
    #Tests user data in users table.
    def test_users(self):
        conn = pymssql.connect('ec2-54-183-139-130.us-west-1.compute.amazonaws.com', 'farmerize_sa', 'pass1234', 'master')
        cursor = conn.cursor(as_dict=True)
        cursor.execute("INSERT INTO farmerize.dbo.users (First, Last, Phone, Email, Address, Age, Password) VALUES ('Test', 'Test', '1231231234', 'test@gmail.com', '123 test lane', '22', 'Password')")
        conn.commit()
        cursor.execute('SELECT First, Last, Phone, Email, Address, Age, Password FROM farmerize.dbo.users WHERE email=%s', 'test@gmail.com')
        item = cursor.fetchone()
        cursor.execute('DELETE FROM farmerize.dbo.users WHERE First=%s', 'Test')
        conn.commit()
        conn.close()
        self.assertEqual(item, {'First': 'Test', 'Last': 'Test', 'Phone': '1231231234', 'Email': 'test@gmail.com', 'Address': '123 test lane', 'Age': 22, 'Password': 'Password'})
    
    #Tests review data in reviews table.
    def test_reviews(self):
        conn = pymssql.connect('ec2-54-183-139-130.us-west-1.compute.amazonaws.com', 'farmerize_sa', 'pass1234', 'master')
        cursor = conn.cursor(as_dict=True)
        cursor.execute("INSERT INTO farmerize.dbo.reviews (ProductID, Review, Rating) VALUES (1, 'Test', '4')")
        conn.commit()
        cursor.execute('SELECT ProductID, Review, Rating FROM farmerize.dbo.reviews WHERE Review=%s', 'Test')
        item = cursor.fetchone()
        cursor.execute('DELETE FROM farmerize.dbo.reviews WHERE Review=%s', 'Test')
        conn.commit()
        conn.close()
        self.assertEqual(item, {'ProductID': 1, 'Review': 'Test', 'Rating': 4})

# Main: Run Test Cases
if __name__ == '__main__':
    unittest.main()
