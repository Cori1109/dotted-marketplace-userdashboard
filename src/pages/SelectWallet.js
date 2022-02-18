/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { useEthers } from "@usedapp/core";
import { Layout, Card, Button, Row, Col, Typography, Menu, Form } from "antd";
import { RightOutlined, ShopFilled } from "@ant-design/icons";
const { Title, Text } = Typography;
const { Header, Content } = Layout;

const MetamaskIcon = () => {
  return (
    <img
      style={{ width: "39px", height: "36px", marginRight: "12px" }}
      src={
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQzIiBoZWlnaHQ9IjEzMiIgdmlld0JveD0iMCAwIDE0MyAxMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMzUuMDUgMUw3OS45NTg1IDQxLjc2MzZMOTAuMjAzMiAxNy43NDAzTDEzNS4wNSAxWiIgZmlsbD0iI0UxNzcyNiIgc3Ryb2tlPSIjRTE3NzI2IiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNy45NzUxIDFMNjIuNTc1OCA0Mi4xNDRMNTIuODIxOSAxNy43NDAyTDcuOTc1MSAxWiIgZmlsbD0iI0UyNzYyNSIgc3Ryb2tlPSIjRTI3NjI1IiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTE1LjIxNCA5NS41MTdMMTAwLjU1NSAxMTcuOTFMMTMxLjk0MyAxMjYuNTUyTDE0MC45MzQgOTYuMDA2NUwxMTUuMjE0IDk1LjUxN1oiIGZpbGw9IiNFMjc2MjUiIHN0cm9rZT0iI0UyNzYyNSIgc3Ryb2tlLXdpZHRoPSIwLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIuMTQzOCA5Ni4wMDY1TDExLjA4MDQgMTI2LjU1Mkw0Mi40MTMyIDExNy45MUwyNy44MDk0IDk1LjUxN0wyLjE0MzggOTYuMDA2NVoiIGZpbGw9IiNFMjc2MjUiIHN0cm9rZT0iI0UyNzYyNSIgc3Ryb2tlLXdpZHRoPSIwLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQwLjcyMzYgNTcuNjg4MkwzMi4wMDUxIDcwLjg0MTRMNjMuMDY1MyA3Mi4yNTQ1TDYyLjAzMDEgMzguODI4NEw0MC43MjM2IDU3LjY4ODJaIiBmaWxsPSIjRTI3NjI1IiBzdHJva2U9IiNFMjc2MjUiIHN0cm9rZS13aWR0aD0iMC4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMDIuMjk5IDU3LjY4ODhMODAuNjY2IDM4LjQ0ODVMNzkuOTU3NSA3Mi4yNTUxTDExMS4wMTggNzAuODQyTDEwMi4yOTkgNTcuNjg4OFoiIGZpbGw9IiNFMjc2MjUiIHN0cm9rZT0iI0UyNzYyNSIgc3Ryb2tlLXdpZHRoPSIwLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQyLjQxMzggMTE3LjkxTDYxLjIxMzIgMTA4LjgzM0w0NS4wMjk1IDk2LjIyMzZMNDIuNDEzOCAxMTcuOTFaIiBmaWxsPSIjRTI3NjI1IiBzdHJva2U9IiNFMjc2MjUiIHN0cm9rZS13aWR0aD0iMC4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik04MS44MTEgMTA4LjgzM0wxMDAuNTU2IDExNy45MUw5Ny45OTQ4IDk2LjIyMzZMODEuODExIDEwOC44MzNaIiBmaWxsPSIjRTI3NjI1IiBzdHJva2U9IiNFMjc2MjUiIHN0cm9rZS13aWR0aD0iMC4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMDAuNTU2IDExNy45MUw4MS44MTEgMTA4LjgzNEw4My4zMzY2IDEyMS4wMDhMODMuMTczIDEyNi4xNzJMMTAwLjU1NiAxMTcuOTFaIiBmaWxsPSIjRDVCRkIyIiBzdHJva2U9IiNENUJGQjIiIHN0cm9rZS13aWR0aD0iMC4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik00Mi40MTM4IDExNy45MUw1OS44NTEzIDEyNi4xNzJMNTkuNzQyMiAxMjEuMDA4TDYxLjIxMzIgMTA4LjgzNEw0Mi40MTM4IDExNy45MVoiIGZpbGw9IiNENUJGQjIiIHN0cm9rZT0iI0Q1QkZCMiIgc3Ryb2tlLXdpZHRoPSIwLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTYwLjE3NzggODguMTc5OEw0NC41OTMgODMuNjE0NUw1NS42MDAzIDc4LjU1OTdMNjAuMTc3OCA4OC4xNzk4WiIgZmlsbD0iIzIzMzQ0NyIgc3Ryb2tlPSIjMjMzNDQ3IiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNODIuODQ2NCA4OC4xNzk4TDg3LjQyMzkgNzguNTU5N0w5OC40ODU3IDgzLjYxNDVMODIuODQ2NCA4OC4xNzk4WiIgZmlsbD0iIzIzMzQ0NyIgc3Ryb2tlPSIjMjMzNDQ3IiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNDIuNDEzMiAxMTcuOTFMNDUuMTM4IDk1LjUxN0wyNy44MDk2IDk2LjAwNjVMNDIuNDEzMiAxMTcuOTFaIiBmaWxsPSIjQ0M2MjI4IiBzdHJva2U9IiNDQzYyMjgiIHN0cm9rZS13aWR0aD0iMC4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik05Ny44ODU1IDk1LjUxN0wxMDAuNTU2IDExNy45MUwxMTUuMjE0IDk2LjAwNjVMOTcuODg1NSA5NS41MTdaIiBmaWxsPSIjQ0M2MjI4IiBzdHJva2U9IiNDQzYyMjgiIHN0cm9rZS13aWR0aD0iMC4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMTEuMDE4IDcwLjg0MTRMNzkuOTU3NSA3Mi4yNTQ2TDgyLjg0NTUgODguMTc5OUw4Ny40MjI5IDc4LjU1OTNMOTguNDg0NyA4My42MTQyTDExMS4wMTggNzAuODQxNFoiIGZpbGw9IiNDQzYyMjgiIHN0cm9rZT0iI0NDNjIyOCIgc3Ryb2tlLXdpZHRoPSIwLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQ0LjU5MjcgODMuNjE0Mkw1NS41OTk5IDc4LjU1OTNMNjAuMTc3NCA4OC4xNzk5TDYzLjA2NTMgNzIuMjU0NkwzMi4wMDUxIDcwLjg0MTRMNDQuNTkyNyA4My42MTQyWiIgZmlsbD0iI0NDNjIyOCIgc3Ryb2tlPSIjQ0M2MjI4IiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzIuMDA2MSA3MC44NDE0TDQ1LjAyOTcgOTYuMjIzN0w0NC41OTM1IDgzLjYxNDJMMzIuMDA2MSA3MC44NDE0WiIgZmlsbD0iI0UyNzUyNSIgc3Ryb2tlPSIjRTI3NTI1IiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOTguNDg1NyA4My42MTQyTDk3Ljk5NTQgOTYuMjIzN0wxMTEuMDE5IDcwLjg0MTRMOTguNDg1NyA4My42MTQyWiIgZmlsbD0iI0UyNzUyNSIgc3Ryb2tlPSIjRTI3NTI1IiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNjMuMDY3MyA3Mi4yNTQ2TDYwLjE3OSA4OC4xOEw2My44Mjk5IDEwNi45ODVMNjQuNjQ3NCA4Mi4yMDExTDYzLjA2NzMgNzIuMjU0NloiIGZpbGw9IiNFMjc1MjUiIHN0cm9rZT0iI0UyNzUyNSIgc3Ryb2tlLXdpZHRoPSIwLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTc5Ljk1ODggNzIuMjU0Nkw3OC40MzI5IDgyLjE0N0w3OS4xOTU4IDEwNi45ODVMODIuODQ2OCA4OC4xOEw3OS45NTg4IDcyLjI1NDZaIiBmaWxsPSIjRTI3NTI1IiBzdHJva2U9IiNFMjc1MjUiIHN0cm9rZS13aWR0aD0iMC4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik04Mi44NDY1IDg4LjE4MDFMNzkuMTk1NiAxMDYuOTg1TDgxLjgxMTMgMTA4LjgzNEw5Ny45OTU0IDk2LjIyMzlMOTguNDg1NyA4My42MTQ0TDgyLjg0NjUgODguMTgwMVoiIGZpbGw9IiNGNTg0MUYiIHN0cm9rZT0iI0Y1ODQxRiIgc3Ryb2tlLXdpZHRoPSIwLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQ0LjU5MyA4My42MTQ0TDQ1LjAyOTIgOTYuMjIzOUw2MS4yMTMgMTA4LjgzNEw2My44Mjg3IDEwNi45ODVMNjAuMTc3OCA4OC4xODAxTDQ0LjU5MyA4My42MTQ0WiIgZmlsbD0iI0Y1ODQxRiIgc3Ryb2tlPSIjRjU4NDFGIiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNODMuMTczNiAxMjYuMTcyTDgzLjMzNjggMTIxLjAwOEw4MS45MjAzIDExOS44MTJINjEuMTA0Nkw1OS43NDIyIDEyMS4wMDhMNTkuODUxMyAxMjYuMTcyTDQyLjQxMzggMTE3LjkxTDQ4LjUxNjggMTIyLjkxTDYwLjg4NjUgMTMxLjQ0NEg4Mi4wODM1TDk0LjUwNzcgMTIyLjkxTDEwMC41NTYgMTE3LjkxTDgzLjE3MzYgMTI2LjE3MloiIGZpbGw9IiNDMEFDOUQiIHN0cm9rZT0iI0MwQUM5RCIgc3Ryb2tlLXdpZHRoPSIwLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTgxLjgxMSAxMDguODMzTDc5LjE5NTMgMTA2Ljk4NUg2My44Mjg3TDYxLjIxMzQgMTA4LjgzM0w1OS43NDE5IDEyMS4wMDhMNjEuMTA0MyAxMTkuODEySDgxLjkyTDgzLjMzNyAxMjEuMDA4TDgxLjgxMSAxMDguODMzWiIgZmlsbD0iIzE2MTYxNiIgc3Ryb2tlPSIjMTYxNjE2IiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTM3LjM5MiA0NC40MjY3TDE0Mi4wMjQgMjEuOTI1M0wxMzUuMDQ5IDFMODEuODExIDQwLjQwNUwxMDIuMyA1Ny42ODg1TDEzMS4yMzUgNjYuMTEzMkwxMzcuNjEgNTguNjY3MUwxMzQuODMxIDU2LjY1NThMMTM5LjI0NSA1Mi42MzQxTDEzNS44NjcgNTAuMDI1MUwxNDAuMjgxIDQ2LjY1NTJMMTM3LjM5MiA0NC40MjY3WiIgZmlsbD0iIzc2M0UxQSIgc3Ryb2tlPSIjNzYzRTFBIiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMSAyMS45MjUzTDUuNjg2MjkgNDQuNDI2N0wyLjY4OTI2IDQ2LjY1NTJMNy4xNTc1NSA1MC4wMjUxTDMuNzc5MDggNTIuNjM0MUw4LjE5Mjg5IDU2LjY1NThMNS40MTM4MSA1OC42NjcxTDExLjc4OTQgNjYuMTEzMkw0MC43MjQ2IDU3LjY4ODVMNjEuMjEzMiA0MC40MDVMNy45NzQ5NCAxTDEgMjEuOTI1M1oiIGZpbGw9IiM3NjNFMUEiIHN0cm9rZT0iIzc2M0UxQSIgc3Ryb2tlLXdpZHRoPSIwLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEzMS4yMzUgNjYuMTEyOUwxMDIuMyA1Ny42ODg2TDExMS4wMTkgNzAuODQxOEw5Ny45OTU0IDk2LjIyMzdMMTE1LjIxNSA5Ni4wMDY0SDE0MC45MzVMMTMxLjIzNSA2Ni4xMTI5WiIgZmlsbD0iI0Y1ODQxRiIgc3Ryb2tlPSIjRjU4NDFGIiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNDAuNzIzNyA1Ny42ODg2TDExLjc4ODggNjYuMTEyOUwyLjE0MzggOTYuMDA2NEgyNy44MDk0TDQ1LjAyODUgOTYuMjIzN0wzMi4wMDUyIDcwLjg0MThMNDAuNzIzNyA1Ny42ODg2WiIgZmlsbD0iI0Y1ODQxRiIgc3Ryb2tlPSIjRjU4NDFGIiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNzkuOTU3OSA3Mi4yNTQ3TDgxLjgxMDYgNDAuNDA0NUw5MC4yMDIyIDE3Ljc0MDFINTIuODIxTDYxLjIxMjYgNDAuNDA0NUw2My4wNjUzIDcyLjI1NDdMNjMuNzczOCA4Mi4yNTUzTDYzLjgyODMgMTA2Ljk4NUg3OS4xOTQ5TDc5LjI0OTUgODIuMjU1M0w3OS45NTc5IDcyLjI1NDdaIiBmaWxsPSIjRjU4NDFGIiBzdHJva2U9IiNGNTg0MUYiIHN0cm9rZS13aWR0aD0iMC4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
      }
    />
  );
};

const WalletConnectIcon = () => {
  return (
    <img
      style={{ width: "39px", height: "36px", marginRight: "12px" }}
      src={
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik04LjE5MTg0IDQuNjMyMzNDMTQuNzEzMyAtMS40ODYwNiAyNS4yODY4IC0xLjQ4NjA2IDMxLjgwODMgNC42MzIzM0wzMi41OTMyIDUuMzY4NjhDMzIuOTE5MiA1LjY3NDYgMzIuOTE5MiA2LjE3MDYgMzIuNTkzMiA2LjQ3NjUyTDI5LjkwODMgOC45OTU0NUMyOS43NDUyIDkuMTQ4NDEgMjkuNDgwOSA5LjE0ODQxIDI5LjMxNzkgOC45OTU0NUwyOC4yMzc4IDcuOTgyMTNDMjMuNjg4MiAzLjcxMzc5IDE2LjMxMTkgMy43MTM3OSAxMS43NjI0IDcuOTgyMTNMMTAuNjA1NyA5LjA2NzMxQzEwLjQ0MjYgOS4yMjAyNyAxMC4xNzgzIDkuMjIwMjcgMTAuMDE1MyA5LjA2NzMxTDcuMzMwMzcgNi41NDgzOEM3LjAwNDI5IDYuMjQyNDYgNy4wMDQyOSA1Ljc0NjQ3IDcuMzMwMzcgNS40NDA1NUw4LjE5MTg0IDQuNjMyMzNaTTM3LjM2MDkgOS44NDE3NUwzOS43NTA1IDEyLjA4MzZDNDAuMDc2NSAxMi4zODk1IDQwLjA3NjUgMTIuODg1NSAzOS43NTA1IDEzLjE5MTRMMjguOTc1OCAyMy4zMDAzQzI4LjY0OTcgMjMuNjA2MiAyOC4xMjEgMjMuNjA2MiAyNy43OTQ5IDIzLjMwMDNDMjcuNzk0OSAyMy4zMDAzIDI3Ljc5NDkgMjMuMzAwMyAyNy43OTQ5IDIzLjMwMDNMMjAuMTQ3NyAxNi4xMjU3QzIwLjA2NjIgMTYuMDQ5MyAxOS45MzQgMTYuMDQ5MyAxOS44NTI1IDE2LjEyNTdDMTkuODUyNSAxNi4xMjU3IDE5Ljg1MjUgMTYuMTI1NyAxOS44NTI1IDE2LjEyNTdMMTIuMjA1NCAyMy4zMDAzQzExLjg3OTQgMjMuNjA2MiAxMS4zNTA3IDIzLjYwNjIgMTEuMDI0NiAyMy4zMDAzQzExLjAyNDYgMjMuMzAwMyAxMS4wMjQ2IDIzLjMwMDMgMTEuMDI0NiAyMy4zMDAzTDAuMjQ5NjIyIDEzLjE5MTNDLTAuMDc2NDUyOCAxMi44ODU0IC0wLjA3NjQ1MjggMTIuMzg5NCAwLjI0OTYyMiAxMi4wODM1TDIuNjM5MTkgOS44NDE2MkMyLjk2NTI2IDkuNTM1NyAzLjQ5Mzk0IDkuNTM1NyAzLjgyMDAxIDkuODQxNjJMMTEuNDY3MyAxNy4wMTYzQzExLjU0ODkgMTcuMDkyNyAxMS42ODEgMTcuMDkyNyAxMS43NjI2IDE3LjAxNjNDMTEuNzYyNiAxNy4wMTYzIDExLjc2MjYgMTcuMDE2MyAxMS43NjI2IDE3LjAxNjNMMTkuNDA5NSA5Ljg0MTYyQzE5LjczNTYgOS41MzU2OSAyMC4yNjQyIDkuNTM1NjggMjAuNTkwMyA5Ljg0MTU5QzIwLjU5MDMgOS44NDE2IDIwLjU5MDMgOS44NDE2IDIwLjU5MDMgOS44NDE2MUwyOC4yMzc3IDE3LjAxNjNDMjguMzE5MiAxNy4wOTI3IDI4LjQ1MTQgMTcuMDkyNyAyOC41MzI5IDE3LjAxNjNMMzYuMTgwMSA5Ljg0MTc1QzM2LjUwNjIgOS41MzU4MyAzNy4wMzQ4IDkuNTM1ODMgMzcuMzYwOSA5Ljg0MTc1WiIgZmlsbD0iIzNCOTlGQyIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjIzLjYzNjQiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="
      }
    />
  );
};

const template = [
  <svg
    data-v-4ebdc598=""
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      data-v-4ebdc598=""
      d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z"
      fill="#111827"
      className="fill-muted"
    ></path>
    <path
      data-v-4ebdc598=""
      d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z"
      fill="#111827"
      className="fill-muted"
    ></path>
    <path
      data-v-4ebdc598=""
      d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z"
      fill="#111827"
      className="fill-muted"
    ></path>
  </svg>,
];
const profile = [
  <svg
    data-v-4ebdc598=""
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      data-v-4ebdc598=""
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z"
      fill="#111827"
      className="fill-muted"
    ></path>
  </svg>,
];

export default function SelectWallet() {
  const { account, chainId, activateBrowserWallet } = useEthers();
  const [chain, setChain] = useState(chainId);
  const history = useHistory();
  const handleWalletConnect = () => {
    console.log("Connecting TrustWallet!");
  };

  const handleMetamask = async () => {
    console.log("Connecting Metamask!", chain);
    if (!account) {
      activateBrowserWallet();
      if (chain !== 4) {
        await switchNetwork("0x1");
      }
      const storeData = JSON.parse(Cookies.get("storeData"));
      const storeItem = {
        MarketName: storeData.title,
        DomainName: storeData.domainName,
        Network: storeData.network,
        status: "passive",
      };
      Cookies.set("storeItem", JSON.stringify(storeItem));
      history.push("/home");
    }
  };

  const switchNetwork = async (chain) => {
    console.log("window.ethereum", window.ethereum);
    if (window.ethereum) {
      await window.ethereum
        .request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: chain }],
        })
        .then((res) => {
          console.log("switch network success!");
          setChain(chain);
        })
        .catch((err) => {
          console.log("switch network error: ", err.message);
        });
    }
  };

  function callback(key) {
    console.log(key);
  }
  return (
    <>
      <Layout className="layout-default layout-signin">
        <Header>
          <div className="header-col header-brand">
            <h5>User Dashboard</h5>
          </div>
          <div className="header-col header-nav">
            <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/dashboard">
                  {template}
                  <span> Dashboard</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/select-store">
                  <ShopFilled />
                  <span>Marketplace</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/profile">
                  {profile}
                  <span>Profile</span>
                </Link>
              </Menu.Item>
            </Menu>
          </div>
        </Header>
        <Content className="signin">
          <Row gutter={[24, 0]} justify="space-around">
            <Col
              xs={{ span: 24, offset: 0 }}
              lg={{ span: 6, offset: 2 }}
              md={{ span: 12 }}
            >
              <Card
                style={{
                  background: "white",
                  borderRadius: "20px",
                  boxShadow: "0 4px 60px rgb(0 0 0 / 10%)",
                }}
              >
                <Title className="mb-15" level={2}>
                  Connect Wallet
                </Title>
                <Text
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#777e90",
                  }}
                >
                  Connect wallet on{" "}
                  <span style={{ color: "#ff0a6c", cursor: "pointer" }}>
                    Ethereum
                  </span>{" "}
                  to your store
                </Text>
                <Form style={{ width: "100%", margin: "26px 0 20px" }}>
                  <Button
                    shape="round"
                    icon={<MetamaskIcon />}
                    style={{
                      display: "flex",
                      width: "100%",
                      height: "60px",
                      alignItems: "center",
                      border: "2px solid #e6e8ec",
                      padding: "10px 20px",
                      justifyContent: "flex-start",
                      marginBottom: "10px",
                    }}
                    onClick={() => {
                      handleMetamask();
                    }}
                  >
                    MetaMask
                    <RightOutlined
                      style={{ marginLeft: "auto", marginRight: 0 }}
                    />
                  </Button>
                  <Button
                    shape="round"
                    icon={<WalletConnectIcon />}
                    style={{
                      display: "flex",
                      width: "100%",
                      height: "60px",
                      alignItems: "center",
                      border: "2px solid #e6e8ec",
                      padding: "10px 20px",
                      justifyContent: "flex-start",
                      marginBottom: "10px",
                    }}
                    onClick={() => {
                      handleWalletConnect();
                    }}
                  >
                    WalletConnect
                    <RightOutlined
                      style={{ marginLeft: "auto", marginRight: 0 }}
                    />
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}
