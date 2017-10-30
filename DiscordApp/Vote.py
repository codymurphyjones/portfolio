from discord.ext import commands



def message_switch(x,args,obj):
    commands =  {
        'start': obj.vote_start,
        'stop': obj.vote_stop,
        'get': obj.vote_get,
        'help': obj.vote_help

    }
    try:
        return commands[x](args)
    except:
        return "Command for Vote does not exist."

class Vote:

    def __init__(self):
        self.isStarted = False
        self.options = []
        self.question = ""
        self.option_data = {}


    def process(self,args):
        #process args into functions to process
        total = len(args)
        if total > 0:
            try:
                num = int(args[0])
                return self.vote_choice(num)
            except:
                return message_switch(args[0], args[1:], self)
        else:
            return self.vote_help(args)


    def vote_start(self, args):
        if self.isStarted:
            return "There is already an active vote"
        else:
            self.question = args[0]
            self.options = args[1:]
            for option in self.options:
                self.option_data[option] = 0
            output = """Vote Subject Has Began
{}
""".format(self.question)

            i = 0
            for key in self.options:
                i = i + 1
                output += """[{}] {}
""".format(i,key)
            self.isStarted = True
            return output


    def vote_stop(self, args):
        if self.isStarted:
            output = """Vote Subject Has Ended
        {}
        """.format(self.question)

            i = 0
            for key in self.options:
                i = i + 1
                output += """[{}] {} votes
        """.format(key, self.option_data[key])
            self.isStarted = False
            self.options = []
            self.question = ""
            self.option_data = {}
            return output
        else:
            return "No active vote"

    def vote_get(self, args):
        if self.isStarted:
            output = """Get Vote Count
            {}
            """.format(self.question)

            i = 0
            for key in self.options:
                i = i + 1
                output += """[{}] {} votes
        """.format(key, self.option_data[key])
            self.isStarted = False
            self.options = []
            self.question = ""
            self.option_data = {}
        else:
            return "No active vote"

        return output

    def vote_choice(self, num):
        if self.isStarted:
            num = num - 1

            if ((num >= len(self.options)) or (num < 0)):
                return "Index Out of Scope"

            self.option_data[self.options[num]] = self.option_data[self.options[num]] + 1

            return str(self.option_data[self.options[num]])
        else:
            return "No active vote"


    def vote_help(self, args):


        return """
        #vote has 4 functions to use

get   -   Returns the current vote counts for each of the options
start -   Starts a new vote if one is not currently active
              start "<title of vote>" option1 option2 option3 etc...
stop -    Ends the current active vote

default function: vote

Simply vote using the following command where <num> is the number associated with your choice
#vote <num>
"""

