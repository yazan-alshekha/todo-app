import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';
import Context from '../../context/context.js';
import List from '../List.js';
import Pagination from '../Pagination.js';
import { v4 as uuid } from 'uuid';
import UserDisplaySettingComponent from '../UserDisplaySettingComponent'

// blueprint styling
import { Button, FormGroup, Label, label } from "@blueprintjs/core";

const ToDo = () => {
  const { displaySetting } = useContext(Context);



  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);


  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  // to slice the list 
  const indexOfLastItem = displaySetting.currentPage * displaySetting.itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - displaySetting.itemsPerPage;
  const CurrentItems = list.slice(indexOfFirstItem, indexOfLastItem);
  // console.log("current ", CurrentItems);



  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);

    setList([...list, item]);

    // adding to global list

  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  // useEffect(() => {
  //   let incompleteCount = globalList.filter(item => !item.complete).length;
  //   setIncomplete(incompleteCount);
  //   document.title = `To Do List: ${incomplete}`;
  // }, [globalList]);



  return (
    <>
      <UserDisplaySettingComponent/>
      <section>
        <h1>To Do List: {incomplete} items pending</h1>
      </section>
      
      <form onSubmit={handleSubmit}>


        <h2>Add To Do Item</h2>

        <Label >
          <span>To Do Item</span>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </Label >

        <Label>
          <span>Assigned To</span>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </Label>

        <Label>
          <span>Difficulty</span>
          <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
        </Label>
     
        {/* <label>
          <button type="submit">Add Item</button>
        </label> */}
        <Label>
          <Button type="submit" text="Add item" className=".bp4-button bp4-icon-add .modifier " tabindex="0" />
        </Label>

      </form>

      {/* 
      {list.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))} */}

  

      <List list={CurrentItems} />
      <Pagination list={list.length} />
    </>
  );
};

export default ToDo;
