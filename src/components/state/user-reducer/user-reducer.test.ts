import React from 'react';
import { render, screen } from '@testing-library/react';
import {userReducer} from './user-reducer';

test('user-reducer childrenCound test', () => {
  const startStete = {    
        name: 'string',
        age: 11,
        coundOfChildren: 0,
        drugs: false
    }

    const endState = userReducer(startStete, {type: 'INCREMENT-CHILDREN'})

    expect(endState.age).toBe(11)
    expect(endState.coundOfChildren).toBe(1)
});

test('user-reducer age test', () => {
    const startStete = {    
          name: 'string',
          age: 11,
          coundOfChildren: 0,
          drugs: false
      }
  
      const endState = userReducer(startStete, {type: 'INCREMENT-AGE'})
  
      expect(endState.age).toBe(12)
      expect(endState.coundOfChildren).toBe(0)
  });

test('user-reducer change name test', () => {
    const startStete = {    
        name: 'string',
        age: 11,
        coundOfChildren: 0,
        drugs: false
    }

    let newName = 'Stiven'

    const endState = userReducer(startStete, {type: 'CHANGE-NAME', newName} )

    expect(endState.age).toBe(11)
    
    expect(endState.name).toBe(newName)
})
