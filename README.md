# Feature Flag Management (FFM)

## Problem Statement

In RDS, currently there is no 'feature-flag' service.Feature-flag helps developers to do feature-flag driven development. It helps in releasing the features to the focused end-users.

## Purpose

Create an end-to-end feature-flag management system for RDS to create, and use the feature-flag(s).

## How?

The feature-flag management system will have 3 parts:

**1. UI (web version)**

Developers can create the feature-flags and control the whole feature-flag management.

**2. Backend system (web version)**

To support the creation, editing, deleting, and updating the feature-flag.

**3. SDK**

To support the developers to manage the feature-flag driven development

### Roles

There would be 2 types of roles:

**1. Developers**

Developers can login to the feature-flag system and create the feature-flag and manage the life-cycle of the feature-flag. However, they won't be able to see RDS across feature-flag

**2. Admin**

Admin can login to the feature-flag with all 'admin' rights. In addition to the rights developers has admin can access all the feature-flags across the RDS.

### Comparison table

| **Action** | **Admin** | **Developer** |
| ------ | ------ | --------- |
| **Create** | ✅  | ✅  |
| **Edit** | ✅ | ✅  |
| **Delete** | ✅ | ✅  |
| **Find** | ✅ | ✅ |
| **Enable/disable** | ✅ | ✅ |
| **Search** | ✅ | ✅ |
| **Access RDS-level flags** | ✅ | ❎ |

### Tech Stack

1.ReactJS

2.NodeJS

3.MongoDB

4.Jest, supertest, and RTL

5.Nodemon

### Architetcure


## Design (WIP)

![HLD](./HLD.png)
