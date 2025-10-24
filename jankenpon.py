import random

print('===================\nRock Paper Scissors Lizard Spock\n===================')
print('\n1) ✊\n2) ✋\n3) ✌️\n4) 🦎\n5) 🖖\n')

rock = 1
paper = 2
scissors = 3
lizard = 4
spock = 5

player = int(input('Pick a number: '))
cpu = int(input('Pick a CPU number: '))

if player == 1 and cpu == 2:
    print('You chose: ✊\nCPU chose: ✋')
    print('The CPU won!')
elif player == 2 and cpu == 1:
    print('You chose: ✋\nCPU chose: ✊')
    print('The Player won!')
elif player == 1 and cpu == 1:
    print('You chose: ✊\nCPU chose: ✊')
    print('It\'s a tie.')
elif player == 2 and cpu == 2:
    print('You chose: ✋\nCPU chose: ✋')
    print('It\'s a tie.')
elif player == 1 and cpu == 3:
    print('You chose: ✊\nCPU chose: ✌️')
    print('The Player won!')
elif player == 3 and cpu == 1:
    print('You chose: ✌️\nCPU chose: ✊')
    print('The CPU won!')
elif player == 3 and cpu == 3:
    print('You chose: ✌️\nCPU chose: ✌️')
    print('It\'s a tie.')
elif player == 1 and cpu == 4:
    print('You chose: ✊\nCPU chose: 🦎')
    print('The Player won!')
elif player == 4 and cpu == 1:
    print('You chose: 🦎\nCPU chose: ✊')
    print('The CPU won!')
elif player == 4 and cpu == 4:
    print('You chose: 🦎\nCPU chose: 🦎')
    print('It\'s a tie.')
elif player == 1 and cpu == 5:
    print('You chose: ✌️\nCPU chose: 🖖')
    print('The CPU won!')
elif player == 5 and cpu == 1:
    print('You chose: 🖖\nCPU chose: ✌️')
    print('The Player won!')
elif player == 5 and cpu == 5:
    print('You chose: 🖖\nCPU chose: 🖖')
    print('It\'s a tie.')
elif player == 5 and cpu == 2:
    print('You chose: 🖖\nCPU chose: ✋')
    print('The CPU won!')
elif player == 2 and cpu == 5:
    print('You chose: ✋\nCPU chose: 🖖')
    print('The Player won!')
elif player == 2 and cpu == 4:
    print('You chose: ✋\nCPU chose: 🦎')
    print('The CPU won!')
elif player == 4 and cpu == 2:
    print('You chose: 🦎\nCPU chose: ✋')
    print('The Player won!')
elif player == 2 and cpu == 3:
    print('You chose: ✋\nCPU chose: ✌️')
    print('The CPU won!')
elif player == 3 and cpu == 2:
    print('You chose: ✌️\nCPU chose: ✋')
    print('The Player won!')
elif player == 3 and cpu == 4:
    print('You chose: ✌️\nCPU chose: 🦎')
    print('The Player won!')
elif player == 4 and cpu == 3:
    print('You chose: 🦎\nCPU chose: ✌️')
    print('The CPU won!')
elif player == 4 and cpu == 5:
    print('You chose: 🦎\nCPU chose: 🖖')
    print('The Player won!')
elif player == 5 and cpu == 4:
    print('You chose: 🖖\nCPU chose: 🦎')
    print('The CPU won!')
else:
    print('Wrong input.')