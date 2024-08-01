Table SuperUser {
    id int [pk, increment]
    username varchar(150) [unique, not null]
    email varchar(150) [unique, not null]
    password varchar(150) [not null]
}

Table User {
    id int [pk, increment]
    username varchar(150) [unique, not null]
    email varchar(150) [unique, not null]
    password varchar(150) [not null]
    organization_id int
    group_id int
}

Table Organization {
    id int [pk, increment]
    name varchar(150) [unique, not null]
}

Table Admin {
    id int [pk, increment]
    user_id int
    organization_id int
}

Table Group {
    id int [pk, increment]
    name varchar(150) [unique, not null]
}

Table Role {
    id int [pk, increment]
    name varchar(150) [unique, not null]
}

Table Permission {
    id int [pk, increment]
    name varchar(150) [unique, not null]
    description varchar(255)
}

Table group_roles {
    group_id int
    role_id int
}

Table role_permissions {
    role_id int
    permission_id int
}

Table Project {
    id int [pk, increment]
    name varchar(150) [not null]
    organization_id int
}

Table Ticket {
    id int [pk, increment]
    title varchar(150) [not null]
    user_id int
    project_id int
    description text
}

Ref: User.organization_id > Organization.id
Ref: User.group_id > Group.id
Ref: Admin.user_id > User.id
Ref: Admin.organization_id > Organization.id
Ref: group_roles.group_id > Group.id
Ref: group_roles.role_id > Role.id
Ref: role_permissions.role_id > Role.id
Ref: role_permissions.permission_id > Permission.id
Ref: Project.organization_id > Organization.id
Ref: Ticket.project_id > Project.id
Ref: Ticket.user_id > User.id
