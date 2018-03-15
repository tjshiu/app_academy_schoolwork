require 'rack'
require_relative '../lib/controller_base'

class MyController < ControllerBase
  # def initialize(req, res)
  #   @req = req
  #   @res = res
  # end

  def go
    if @req.path == "/cats"
      # @res.headers['Content-Type'] = 'text/html'
      # @res.body = ['<p>hello cats!</p>']
      render_content("hello cats!", "text/html")
    else
      redirect_to("/cats")
    end
  end
end

app = Proc.new do |env|
  req = Rack::Request.new(env)
  res = Rack::Response.new
  MyController.new(req, res).go
  res.finish
end

Rack::Server.start(
  app: app,
  Port: 3000
)
