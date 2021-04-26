

# VMware Assignment: Stock Browser

Technologies Used:

Frontend: React.JS, Bootstrap, HTML, CSS.
Backend: Node.JS, Express.JS (REST API Server).
Database: MongoDB Atlas.

Running the Project:
STEP 1:
USING npm install INSTALL ALL DEPENDENCIES IN PACKAGE.JSON FILE.

STEP 2(Starting Frontend):
GO TO PATH FOLDER IN COMMAND PROMPT TYPE npm start FOR STARTING FRONT END

STEP 3 (Starting Backend):
GO TO PATH FOLDER (vmware-> src -> server -> server.js->)I N COMMAND PROMPT TYPE node server.js this will start the server.


Application Requirements:


•	Insertion of Stocks by the user into Database (Extra Functionality).
An extra route is created using MERN Stack. Which allows user to add New Stocks into the grid using REST CRUD Operations.

The code for this functionality can be seen at:
Frontend:  vmware-> src- > components-> Add.js
Backend:   vmware-> src -> server -> server.js->(see Line 30 or search for comment “Post Data Into Schema”)





•	Creation of Grid to show stocks:
GET request is trigged using axios (npm package) when page loads for the first time. Data fetched using that GET request in displayed in table using ComponentDidMount lifecycle method:

The code for this functionality can be seen at:
Frontend:  vmware-> src- > components-> View.js
Backend:   vmware-> src -> server -> server.js->(see Line 53 or search for comment “Get Data”)

 

•	Creation of container to show more details:
A link is created on each symbol element in the table when the user clicks. A separate GET REST request is made to an API. Which fetches data and displays into separate container.
 


•	Deletion of Records:
When user click on particular elements in the actions table. The data gets deleted.

Frontend:  vmware-> src- > components-> View.js


 


•	Filter:
Filter dropdown in populated by fetching all unique tags from the REST API’s and when specific element in clicked on the dropdown an API request is made to fetch that particular item and at last grid is updated to show the filtered data.
                                



