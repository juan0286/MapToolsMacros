[H: tokenList=getExposedTokenNames()]
[H: imgList = tokenList]
[H: Num = listCount(imgList)]
 
[h,COUNT(Num),CODE:
{
	[h:tokenName=listGet(imgList,roll.count)]
	[h,token(tokenName): image=getTokenImage()]
	[h:imgList=listReplace(imgList,roll.count,tokenName+" "+image)]
}]
[h:status=input(
		"Target|"+imgList+"|Select Target|LIST|SELECT=0 ICON=TRUE ICONSIZE=30",
		"newName| |Enter a new name for this token"
)]
[h:abort(status)]
[h:targetName = listGet(tokenList,Target)]
 
[h:switchToken(targetName)]
 
[h:token.name=newName]
The token's name has been changed to <i>[r:newName]</i>.