const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Complete Report",
                "taskDescription": "Prepare the quarterly sales report.",
                "taskDate": "2024-12-01",
                "category": "Reports",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Team Meeting",
                "taskDescription": "Attend the weekly team meeting.",
                "taskDate": "2024-12-02",
                "category": "Meetings",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Client Follow-Up",
                "taskDescription": "Follow up with client X regarding project status.",
                "taskDate": "2024-12-03",
                "category": "Communication",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Update Database",
                "taskDescription": "Ensure the customer database is up-to-date.",
                "taskDate": "2024-12-01",
                "category": "Database",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Prepare Presentation",
                "taskDescription": "Create slides for the annual review meeting.",
                "taskDate": "2024-12-04",
                "category": "Preparation",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Call Supplier",
                "taskDescription": "Confirm delivery schedule for next month.",
                "taskDate": "2024-12-03",
                "category": "Communication",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Resolve Ticket #123",
                "taskDescription": "Fix the reported issue with the billing system.",
                "taskDate": "2024-12-02",
                "category": "Support",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Documentation",
                "taskDescription": "Write documentation for the new feature.",
                "taskDate": "2024-12-03",
                "category": "Documentation",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Fix Bug #456",
                "taskDescription": "Resolve the login issue reported by users.",
                "taskDate": "2024-12-01",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Review Code",
                "taskDescription": "Review the pull request for the new feature.",
                "taskDate": "2024-12-02",
                "category": "Code Review",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Write Tests",
                "taskDescription": "Add unit tests for the payment module.",
                "taskDate": "2024-12-03",
                "category": "Testing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Onboard New Hire",
                "taskDescription": "Guide the new team member through onboarding.",
                "taskDate": "2024-12-01",
                "category": "HR",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Inventory Check",
                "taskDescription": "Audit the inventory for discrepancies.",
                "taskDate": "2024-12-02",
                "category": "Inventory",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "taskTitle": "Plan Event",
                "taskDescription": "Organize the year-end team-building activity.",
                "taskDate": "2024-12-04",
                "category": "Events",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    console.log(employees, admin)
}