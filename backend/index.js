import { get } from 'http';
import mysql from 'mysql2';


import dotenv from 'dotenv';
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getAAPLData(){
    const [rows] = await pool.query("select * from sample_data_history where ticker = 'AAPL'")
    return rows;
}

export async function getRGPData(){
    const [rows] = await pool.query(
        `
        select ticker,revenue, gp 
        from sample_data_history 
        where ticker = 'AAPL'
        `
        )
        return rows;
}

export async function getFYData(){
    const [rows] = await pool.query(`select ticker, revenue, gp 
    from sample_data_history
     where ticker = 'AAPL' 
     and 
     date between '2019-01-01' and '2023-12-31'`
     )
    return rows;
}

export async function getYELPData(){
    const [rows] = await pool.query(`select * from sample_data_history where ticker = 'YELP'`)
    return rows;
}

export async function getZSData(){
    const [rows] = await pool.query(`Select * from sample_data_history where ticker = 'ZS'`)
    return rows;
}