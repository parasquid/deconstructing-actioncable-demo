class EchoChannel < ApplicationCable::Channel
  def subscribed
    stream_from "EchoChannel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def chat(data)
    ActionCable.server.broadcast("EchoChannel", data)
  end
end
