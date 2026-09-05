import { config } from 'dotenv';
import mysql from 'mysql2/promise';


export const connectToDatabase = async () => {
  const host = process.env.DB_HOST;
  const port = parseInt(process.env.DB_PORT || '3306');
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  const database = process.env.DB_NAME;

  if (!host || !port || !user || !password || !database) {
    throw new Error('Missing DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, or DB_NAME in .env');
  }

  const connection = await mysql.createPool({
    host,
    port,
    user,
    password,
    database,
  });
  return connection;
};


export const getUserByMobile = async (mobileNumber: string) => {
  const connection = await connectToDatabase();
  const [rows]:any = await connection.execute(`SELECT * FROM production.users where mobile_number = ?`, [mobileNumber]);
  return rows[0];
}


export const getUserByEmail = async (email: string) => {
  const connection = await connectToDatabase();
  const [rows]:any = await connection.execute(`SELECT * FROM production.users where email = ?`, [email]);
  return rows[0];
}

export const createUserThroughMobile = async (newUserMobileNumber: any) => {x
  const connection = await connectToDatabase();
  const [rows]:any = await connection.execute(`SELECT * FROM production.sms_history where send_to = ?`, [newUserMobileNumber]);
  return rows[0];
}