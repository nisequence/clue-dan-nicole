import React from 'react'
import GameplayGrid from './gameplayGrid/GameplayGrid'
import Scoresheet from './scoresheet/Scoresheet'

export default function GameLayout() {
  return (
    <div id='gameLayout'>
        <GameplayGrid/>
        <Scoresheet/>
    </div>
  )
}
