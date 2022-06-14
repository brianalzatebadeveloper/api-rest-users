import { request, response } from "express";
import { getConnection } from "../database/DataBase";

const getUsers = async (request, response) => {
  
  try {

    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM users");
    response.json(result);
    
  } catch (error) {

    response.status(500);
    response.send(error.message);

  }
  
};

const getUser = async (request, response) => {
  
  try {

    const { id } = request.params;
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM users WHERE id = ?", id);
    response.json(result);
    
  } catch (error) {

    response.status(500);
    response.send(error.message);

  }
  
};

const addUsers = async (request, response) => {

  try {

    const { name, last_name, phone, email, age, status } = request.body;

    if (name === undefined || 
        last_name === undefined ||
        phone === undefined || 
        email === undefined || 
        age === undefined || 
        status === undefined
        ) {
      response.status(400).json({ message: "Bad Request. Please fill all field." });
    }

    const user = { name, last_name, phone, email, age, status, created_at: new Date(), updated_at: new Date() };
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM users WHERE email LIKE ?", '%' + email +'%');

    if (result.length > 0)
    {
      response.status(400).json({ message: "user already exists." });
    }
    else
    {
      await connection.query("INSERT INTO users SET ?", user);
      response.json({ message: "user added" });
    }
    
  } catch (error) {

    response.status(500);
    response.send(error.message);

  }

};

const updateUser = async (request, response) => {
  
  try {
  
    const { id } = request.params;
    const { name, last_name, phone, email, age, status } = request.body;

    if (id === undefined ||
        name === undefined || 
        last_name === undefined ||
        phone === undefined || 
        email === undefined || 
        age === undefined || 
        status === undefined
        ) {
      response.status(400).json({ message: "Bad Request. Please fill all field." });
    }

    const user = {id, name, last_name, phone, email, age, status, updated_at: new Date() };
    
    const connection = await getConnection();
    const result = await connection.query("UPDATE users SET ? WHERE id = ?", [user, id]);

    if( result['affectedRows'] === 0)
    {
      response.status(400).json({ message: "the user could not be updated" });
    }
    else
    {
      response.json({ message: "user updated" });
    }
    
  } catch (error) {

    response.status(500);
    response.send(error.message);

  }
  
};

const deleteUser = async (request, response) => {
  
  try {

    const { id } = request.params;
    const connection = await getConnection();
    const result = await connection.query("DELETE FROM users WHERE id = ?", id);

    if( result['affectedRows'] === 0)
    {
      response.status(400).json({ message: "the user could not be deleted" });
    }
    else
    {
      response.json({ message: "user deleted" });
    }
    
  } catch (error) {

    response.status(500);
    response.send(error.message);

  }
  
};

export const Methods = {
  getUsers,
  getUser,
  addUsers,
  updateUser,
  deleteUser
};