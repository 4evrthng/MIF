<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output method="html" doctype-system="about:legacy-compat" encoding="UTF-8" />

	<xsl:template match="/">
		<html>
			<body>
				
				<h2>Awards:</h2>
				<xsl:for-each select="movies/movie">
					
					<xsl:sort select="@name"/>
					<h3>	
						<xsl:value-of select="@name"/>
						
					</h3>
					<xsl:apply-templates select="nominations"/>
					
					<xsl:for-each select="nominations/award">
						<xsl:number value="position()" format="I. "/>
						<xsl:value-of select="@name"/>
						
						<br/>
						<xsl:apply-templates/>
						<p></p>
					</xsl:for-each>
				</xsl:for-each>
			</body>
		</html>
	</xsl:template>

	<xsl:template match="nominations">
		<h5>
			<xsl:if test="count(award)&gt; 0">There is at least one award to this movie </xsl:if>
		</h5>
	</xsl:template>

	<xsl:template match="subject">
		<xsl:value-of select="@name"/>
		<br/>
	</xsl:template>
	
</xsl:stylesheet>
