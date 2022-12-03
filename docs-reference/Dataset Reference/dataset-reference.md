---
sidebar_position: 1
---

# Dataset Reference

A dataset block defines which data is shown in the popup and how it's shown. It contains the following properties:

| Field name | Description |
| --- | --- |
| id | The dataset id. This will be prepopulated for you. |
| name | Optional. Human readable text. |
| attributes | Optional. An object that defines how data attributes will be shown. See the Attribute definition section below for more information. |
| keyAttributes | Optional. A subset of attributes that will be shown when a user clicks on a feature. If empty, all attributes will be shown. |
| titleAttribute | Optional. The attribute that will be used as the popup title. |