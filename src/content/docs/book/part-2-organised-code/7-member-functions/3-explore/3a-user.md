---
title: User Account
sidebar:
    label: " - User Account"
---

Create a class to represent a user account. This should have a username and a password. The password should be kept private, so that it cannot be read outside the class. The system will have a single user, which is set when the program starts. Allow the user to test the login, and to change their password. The change password method should accept the current password, and the new password, and only update the password if the existing passwords match. The code should also check the new password was not the previous password. You may choose to add additional constraints on the password as well.

```txt
Username: Glory
Password: 123Er
- Account set.

1: Set account
2: Test login
3: Change password
4: Quit
> 2
Username: Glory
Password: abc
- Login failed

1: Set account
2: Test login
3: Change password
4: Quit
> 3
Current Password: 123er
New Password: abc123
- Failed to change password - invalid password

1: Set account
2: Test login
3: Change password
4: Quit
> 3
Current Password: 123Er
New Password: abc123
- Password changed

1: Set account
2: Test login
3: Change password
4: Quit
> 3
Current Password: abc123
New Password: 123Er
- Failed to change password - password reuse
```

:::note
Don't worry that the password is showing in the terminal at this stage. Focus on the coding, and the access to this data within your program for now.
:::
