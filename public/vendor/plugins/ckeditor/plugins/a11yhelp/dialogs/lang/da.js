﻿/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.plugins.setLang('a11yhelp', 'da', {
  title: 'Tilgængelighedsinstrukser',
  contents: 'Onlinehjælp. For at lukke dette vindue klik ESC',
  legend: [
    {
      name: 'Generelt',
      items: [
        {
          name: 'Editor værktøjslinje',
          legend:
              'Press ${toolbarFocus} to navigate to the toolbar. Move to the next and previous toolbar group with TAB and SHIFT-TAB. Move to the next and previous toolbar button with RIGHT ARROW or LEFT ARROW. Press SPACE or ENTER to activate the toolbar button.'
        },
        {
          name: 'Editor Dialog',
          legend:
              'Inside a dialog, press TAB to navigate to next dialog field, press SHIFT + TAB to move to previous field, press ENTER to submit dialog, press ESC to cancel dialog. For dialogs that have multiple tab pages, press ALT + F10 to navigate to tab-list. Then move to next tab with TAB OR RIGTH ARROW. Move to previous tab with SHIFT + TAB or LEFT ARROW. Press SPACE or ENTER to select the tab page.'
        },
        {
          name: 'Editor Context Menu',
          legend:
              'Press ${contextMenu} or APPLICATION KEY to open context-menu. Then move to next menu option with TAB or DOWN ARROW. Move to previous option with SHIFT+TAB or UP ARROW. Press SPACE or ENTER to select the menu option. Open sub-menu of current option with SPACE or ENTER or RIGHT ARROW. Go back to parent menu item with ESC or LEFT ARROW. Close context menu with ESC.'
        },
        {
          name: 'Editor List Box',
          legend:
              'Inside a list-box, move to next list item with TAB OR DOWN ARROW. Move to previous list item with SHIFT + TAB or UP ARROW. Press SPACE or ENTER to select the list option. Press ESC to close the list-box.'
        },
        {
          name: 'Editor Element Path Bar',
          legend:
              'Press ${elementsPathFocus} to navigate to the elements path bar. Move to next element button with TAB or RIGHT ARROW. Move to previous button with  SHIFT+TAB or LEFT ARROW. Press SPACE or ENTER to select the element in editor.'
        }
      ]
    },
    {
      name: 'Kommandoer',
      items: [
        {name: 'Fortryd kommando', legend: 'Klik på ${undo}'},
        {name: 'Gentag kommando', legend: 'Klik ${redo}'},
        {name: ' Bold command', legend: 'Klik ${bold}'},
        {name: ' Italic command', legend: 'Klik ${italic}'},
        {name: ' Underline command', legend: 'Klik ${underline}'},
        {name: ' Link command', legend: 'Klik ${link}'},
        {name: ' Toolbar Collapse command', legend: 'Klik ${toolbarCollapse}'},
        {
          name: ' Access previous focus space command',
          legend:
              'Press ${accessPreviousSpace} to access the closest unreachable focus space before the caret, for example: two adjacent HR elements. Repeat the key combination to reach distant focus spaces.'
        },
        {
          name: ' Access next focus space command',
          legend:
              'Press ${accessNextSpace} to access the closest unreachable focus space after the caret, for example: two adjacent HR elements. Repeat the key combination to reach distant focus spaces.'
        },
        {name: ' Accessibility Help', legend: 'Kilk ${a11yHelp}'}
      ]
    }
  ],
  backspace: 'Backspace',
  tab: 'Tab',
  enter: 'Enter',
  shift: 'Shift',
  ctrl: 'Ctrl',
  alt: 'Alt',
  pause: 'Pause',
  capslock: 'Caps Lock',
  escape: 'Escape',
  pageUp: 'Page Up',
  pageDown: 'Page Down',
  end: 'End',
  home: 'Home',
  leftArrow: 'Venstre pil',
  upArrow: 'Pil op',
  rightArrow: 'Højre pil',
  downArrow: 'Pil ned',
  insert: 'Insert',
  'delete': 'Delete',
  leftWindowKey: 'Venstre Windows tast',
  rightWindowKey: 'Højre Windows tast',
  selectKey: 'Select key',
  numpad0: 'Numpad 0',
  numpad1: 'Numpad 1',
  numpad2: 'Numpad 2',
  numpad3: 'Numpad 3',
  numpad4: 'Numpad 4',
  numpad5: 'Numpad 5',
  numpad6: 'Numpad 6',
  numpad7: 'Numpad 7',
  numpad8: 'Numpad 8',
  numpad9: 'Numpad 9',
  multiply: 'Gange',
  add: 'Plus',
  subtract: 'Minus',
  decimalPoint: 'Decimal Point',
  divide: 'Divider',
  f1: 'F1',
  f2: 'F2',
  f3: 'F3',
  f4: 'F4',
  f5: 'F5',
  f6: 'F6',
  f7: 'F7',
  f8: 'F8',
  f9: 'F9',
  f10: 'F10',
  f11: 'F11',
  f12: 'F12',
  numLock: 'Num Lock',
  scrollLock: 'Scroll Lock',
  semiColon: 'Semikolon',
  equalSign: 'Lighedstegn',
  comma: 'Komma',
  dash: 'Bindestreg',
  period: 'Punktum',
  forwardSlash: 'Skråstreg',
  graveAccent: 'Grave Accent',
  openBracket: 'Start klamme',
  backSlash: 'Omvendt skråstreg',
  closeBracket: 'Slut klamme',
  singleQuote: 'Enkelt citationstegn'
});