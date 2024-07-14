import jenkins.model.*
import hudson.util.*
import jenkins.install.*;

def instance = Jenkins.getInstance()

// List of required plugins
def plugins = [
  "kubernetes",
  "workflow-aggregator",
  "git",
  "configuration-as-code",
  "kubernetes-credentials-provider"
]

def pm = instance.getPluginManager()
def uc = instance.getUpdateCenter()

plugins.each {
  if (!pm.getPlugin(it)) {
    def plugin = uc.getPlugin(it)
    if (plugin) {
      plugin.deploy()
      println("Installed plugin: ${it}")
    } else {
      println("Failed to install plugin: ${it}")
    }
  }
}

instance.save()
