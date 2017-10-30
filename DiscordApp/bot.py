import json
from discord.ext import commands
import random


from Vote import Vote

vote_handler = Vote()

#https://discordapp.com/oauth2/authorize?access_type=online&client_id=364969276328640522&permissions=3148800

class Slapper(commands.Converter):
    async def convert(self, ctx, argument):
        to_slap = random.choice(ctx.guild.members)
        return '{0.author} slapped {1} because *{2}*'.format(ctx, to_slap, argument)

bot = commands.Bot(command_prefix='#', description='Test Bot')

@bot.event
async def on_member_join(member):
    server = member.server
    fmt = 'Welcome {0.mention} to {1.name}!'
    await bot.send_message(server, fmt.format(member, server))

@bot.event
async def on_ready():
    print('Logged in as')
    print(bot.user.name)

@bot.event
async def on_command_error(error, ctx):
    print(error)
    print(ctx)

@bot.command(pass_context=True)
async def hello(ctx):
    await bot.say("Hello!")

@bot.command(pass_context=True)
async def vote(ctx,*args):
    output = vote_handler.process(args)
    await bot.say(output)


@bot.command(pass_context=True)
async def test(ctx):

    voice = await bot.join_voice_channel(ctx.message.author.voice_channel)
    player = await voice.create_ytdl_player('https://www.youtube.com/watch?v=1AeQjMZiYoE')
    player.start()



bot.run('MzY1Mjc2MjU0MTU4NzE2OTQx.DLb9iQ.KA6gnR9txp0JA8dmhruk6Pei1QM')

